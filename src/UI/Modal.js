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

      const modalElement = modalElements.querySelector(".modal");
      // <div class="modal">
      //   <div class="modal__content centered">
      //     <div class="lds-dual-ring"></div>
      //   </div>
      // </div>

      const backdropElement = modalElements.querySelector(".backdrop");
      //  <div class="backdrop"></div>

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

      modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement("afterbegin", modalElement);
      document.body.insertAdjacentElement("afterbegin", backdropElement);
    } else {
      // fallback code
      alert(this.fallbackText);
    }
  }

  hide() {}
}
