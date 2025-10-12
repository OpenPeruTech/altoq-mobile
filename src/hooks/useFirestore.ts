import { db } from "@/services/firebase/config";
import { createFirestoreService } from "@/services/firebase/firestoreService";
import { useEffect, useState } from "react";

/**
 * Hook genérico para obtener documentos de Firestore
 */
export function useFirestore<T extends { id?: string }>(
  collectionName: string
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const service = createFirestoreService<T>(db, collectionName);
        const result = await service.getAll();
        setData(result);
        setError(null);
      } catch (err) {
        console.error(`Error fetching ${collectionName}:`, err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, loading, error };
}

/**
 * Hook para obtener un documento por ID
 */
export function useFirestoreDoc<T extends { id?: string }>(
  collectionName: string,
  docId: string | null
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!docId) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const service = createFirestoreService<T>(db, collectionName);
        const result = await service.getById(docId);
        setData(result);
        setError(null);
      } catch (err) {
        console.error(`Error fetching ${collectionName}/${docId}:`, err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, docId]);

  return { data, loading, error };
}
