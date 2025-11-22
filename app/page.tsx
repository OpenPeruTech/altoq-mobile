import { Button, Container, Typography } from "@/components/atoms";
import { CountdownTimer } from "@/components/molecules";
import { ELECTION_DATE } from "@/constants";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-primary-50 via-white to-secondary-50">
      <section className="flex min-h-screen items-center justify-center py-20">
        <Container maxWidth="lg" className="text-center">
          <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-primary-600 text-4xl font-bold text-white shadow-strong">
            A
          </div>

          <Typography
            variant="h1"
            className="mb-6 bg-linear-to-r from-primary-600 to-secondary-600 bg-clip-text font-display text-transparent"
          >
            Altoq
          </Typography>

          <Typography
            variant="h3"
            className="mb-4 text-neutral-700"
            weight="medium"
          >
            Vota Informado
          </Typography>

          <Typography
            variant="p"
            className="mx-auto mb-12 max-w-2xl text-lg text-neutral-600"
          >
            La plataforma definitiva para conocer a los candidatos y sus
            propuestas en las Elecciones Generales 2026. Toma decisiones
            informadas para el futuro del Perú.
          </Typography>

          <div className="mb-12">
            <Typography
              variant="h5"
              className="mb-6 text-neutral-700"
              weight="semibold"
            >
              Lanzamiento en:
            </Typography>
            <CountdownTimer targetDate={ELECTION_DATE} />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="shadow-strong">
              Notifícame cuando lance
            </Button>
            <Button size="lg" variant="outline">
              Conoce más
            </Button>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-2xl">
                📊
              </div>
              <Typography variant="h6" className="mb-2">
                Información Completa
              </Typography>
              <Typography variant="p" className="text-neutral-600">
                Accede a propuestas detalladas de todos los candidatos
              </Typography>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-2xl">
                🔍
              </div>
              <Typography variant="h6" className="mb-2">
                Compara Candidatos
              </Typography>
              <Typography variant="p" className="text-neutral-600">
                Herramientas para comparar propuestas lado a lado
              </Typography>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-2xl">
                ✅
              </div>
              <Typography variant="h6" className="mb-2">
                Decide Informado
              </Typography>
              <Typography variant="p" className="text-neutral-600">
                Toma la mejor decisión para tu voto
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Typography variant="small" className="text-neutral-600">
              © 2024 Altoq. Todos los derechos reservados.
            </Typography>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-neutral-600 transition-colors hover:text-primary-600"
              >
                <Typography variant="small">Privacidad</Typography>
              </a>
              <a
                href="#"
                className="text-neutral-600 transition-colors hover:text-primary-600"
              >
                <Typography variant="small">Términos</Typography>
              </a>
              <a
                href="#"
                className="text-neutral-600 transition-colors hover:text-primary-600"
              >
                <Typography variant="small">Contacto</Typography>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
