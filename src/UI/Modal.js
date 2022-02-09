export class Modal {
    constructor(contentId) {
        this.contentTemplateEl = document.getElementById(contentId);
        this.modalTemplateEl = document.getElementById("modal-template");
        this.modalEl = null;
        this.backdropEl = null;
    }

    show() {
        if ("content" in document.createElement("template")) {
            const modalContents = document.importNode(this.modalTemplateEl.content, true);
            this.modalEl = modalContents.querySelector(".modal");
            this.backdropEl = modalContents.querySelector(".backdrop");
            const contentEl = document.importNode(this.contentTemplateEl.content, true);

            this.modalEl.appendChild(contentEl);
            document.body.insertAdjacentElement("afterbegin", this.modalEl);
            document.body.insertAdjacentElement("afterbegin", this.backdropEl);
        } else {
            alert("Template content not available.");
        }
    }

    hide() {
        if (this.modalEl) {
            document.body.removeChild(this.modalEl);
            document.body.removeChild(this.backdropEl);
            this.modalEl = null;
            this.backdropEl = null;
        }
    }
}
