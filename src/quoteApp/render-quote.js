/** Render tags
 * Create a for, that create the necessary tag element for append in the container
 * @param {HTMLDivElement} container Where append the tags
 * @param {object[]} data The data obtained form the API
 */
const RENDER_TAGS = (container, data) => {
	for (let tagNum = 0; tagNum < data.tags.length; tagNum++) {
		const tag = document.createElement("p");
		tag.classList = "quote--tag";
		tag.innerText = data.tags[tagNum];
		container.append(tag);
	}
};

/** Render quote
 * Append the necessary content to the respective element
 * @param {HTMLHeadingElement} authorElement 
 * @param {HTMLQuoteElement} quoteElement 
 * @param {HTMLDivElement} quoteContainer 
 * @param {HTMLDivElement} tagsContainer 
 * @param {object[]} quoteData 
 */
export const RENDER_QUOTE = (
	authorElement,
	quoteElement,
	quoteContainer,
	tagsContainer,
	quoteData
) => {
	// quoteElement.innerText = "";

	quoteElement.innerText = quoteData.content;
	authorElement.innerText = quoteData.author;
	quoteContainer.append(quoteElement);

	tagsContainer.innerHTML = "";
	RENDER_TAGS(tagsContainer, quoteData);
};
