import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  OrderByDirection,
  query,
  Timestamp,
  updateDoc,
  where,
  WhereFilterOp,
} from "firebase/firestore";

/**
 * Servicio genérico de Firestore con operaciones CRUD
 * Similar al servicio del proyecto web pero adaptado para React Native
 */
export const createFirestoreService = <T extends { id?: string }>(
  db: Firestore,
  collectionName: string
) => {
  const ref = collection(db, collectionName);

  return {
    /**
     * Crear un nuevo documento
     */
    async create(
      data: Omit<T, "id" | "createdAt" | "updatedAt">
    ): Promise<string> {
      const now = Timestamp.now();
      const docRef = await addDoc(ref, {
        ...data,
        createdAt: now,
        updatedAt: now,
      });
      return docRef.id;
    },

    /**
     * Obtener todos los documentos
     */
    async getAll(): Promise<T[]> {
      const snapshot = await getDocs(ref);
      return snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as T)
      );
    },

    /**
     * Obtener un documento por ID
     */
    async getById(id: string): Promise<T | null> {
      const snapshot = await getDoc(doc(db, collectionName, id));
      if (!snapshot.exists()) return null;
      return {
        id: snapshot.id,
        ...snapshot.data(),
      } as T;
    },

    /**
     * Actualizar un documento
     */
    async update(
      id: string,
      updates: Partial<Omit<T, "id" | "createdAt">>
    ): Promise<void> {
      await updateDoc(doc(db, collectionName, id), {
        ...updates,
        updatedAt: Timestamp.now(),
      });
    },

    /**
     * Eliminar un documento
     */
    async remove(id: string): Promise<void> {
      await deleteDoc(doc(db, collectionName, id));
    },

    /**
     * Consultar con filtros
     */
    async query(
      filters: {
        field: string;
        operator: WhereFilterOp;
        value: any;
      }[],
      orderByField?: string,
      orderDirection: OrderByDirection = "asc",
      limitCount?: number
    ): Promise<T[]> {
      let q = query(ref);

      // Aplicar filtros
      filters.forEach((filter) => {
        q = query(q, where(filter.field, filter.operator, filter.value));
      });

      // Aplicar ordenamiento
      if (orderByField) {
        q = query(q, orderBy(orderByField, orderDirection));
      }

      // Aplicar límite
      if (limitCount) {
        q = query(q, limit(limitCount));
      }

      const snapshot = await getDocs(q);
      return snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as T)
      );
    },
  };
};
