import { expect, test } from "@playwright/test";

test("home navega a catalogo", async ({ page }) => {
  await page.goto("/");

  const searchButton = page.getByRole("button", { name: "Buscar alojamientos" });
  await expect(searchButton).toBeVisible();

  await expect(async () => {
    await searchButton.click();
    await expect(page).toHaveURL(/\/catalog$/);
  }).toPass({ timeout: 20_000 });

  await expect(page.getByRole("heading", { name: /estancias en uruguay/i })).toBeVisible();
});

test("search redirige a catalogo", async ({ page }) => {
  await page.goto("/search");

  await expect(page).toHaveURL(/\/catalog$/);
  await expect(page.getByText("Resultados de busqueda")).toBeVisible();
});

test("detalle valido renderiza contenido", async ({ page }) => {
  await page.goto("/rooms/valle-cielo-01");

  await expect(page.getByRole("heading", { name: "Loft creativo con vista al valle" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Reservar ahora" })).toBeVisible();
});

test("detalle invalido muestra estado not found", async ({ page }) => {
  await page.goto("/rooms/id-inexistente");

  await expect(page.getByRole("heading", { name: "No encontramos esta habitacion" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Volver al catalogo" })).toBeVisible();
});
