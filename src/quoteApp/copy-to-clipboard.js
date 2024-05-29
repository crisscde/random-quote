export const COPY_TO_CLIPBOARD = async () => {
	const QUOTE_TEXT = document.querySelector(".quote--text");
	try {
		await navigator.clipboard.writeText(QUOTE_TEXT.innerText);
	} catch (err) {
		console.error("Error al copiar al portapapeles:", err);
	}
};
