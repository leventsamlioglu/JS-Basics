export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    // <template id="loading-modal-content">
    //   #document-fragment
    //   <div class="modal__content centered">
    //     <div class="lds-dual-ring"></div>
    //   </div>
    // </template>
    this.modalTemplateEl = document.getElementById("modal-template");
    // <template id="modal-template">
    //   #document-fragment
    //   <div class="backdrop"></div>
    //   <div class="modal"></div>
    // </template>
  }

  show() {
    if ("content" in document.createElement("template")) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
        // #document-fragment
        // <div class="backdrop"></div>
        // <div class="modal"></div>

        // modalElements = #document-fragment
      );

      this.modalElement = modalElements.querySelector(".modal");
      // <div class="modal"></div>

      this.backdropElement = modalElements.querySelector(".backdrop");
      // <div class="backdrop"></div>

      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );
      // this.contentTemplateEl.content =
      // #document-fragment
      // <div class="modal__content centered">
      //   <div class="lds-dual-ring"></div>
      // </div>

      // contentElement =
      // #document-fragment

      this.modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement("afterbegin", this.modalElement);
      document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    } else {
      // fallback code
      alert(this.fallbackText);
    }
  }

  hide() {
    if (this.modalElement) {
      document.body.removeChild(this.modalElement); // this.modalElement.remove()
      document.body.removeChild(this.backdropElement);
      this.modalElement = null;
      this.backdropElement = null;
      // DOM elements are no longer needed and can be cleaned up so that we don't have them in memory and create memory leaks,
    }
  }
}
