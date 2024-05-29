import "./style.css";
import { CREATE_QUOTE_ELEMENTS } from "./src/quoteApp";

const htmlElements = {
	authorName: document.querySelector(".quote--name"),
	tags: document.querySelector(".quote--tags"),
	quoteContainer: document.querySelector(".quote--container"),
	newQuoteBtn: document.querySelector("#quote--new"),
	copyQuoteBtn: document.querySelector("#quote--copy"),
};

const { authorName, tags, quoteContainer, newQuoteBtn, copyQuoteBtn } =
	htmlElements;

CREATE_QUOTE_ELEMENTS(
	authorName,
	quoteContainer,
	tags,
	newQuoteBtn,
	copyQuoteBtn
);
