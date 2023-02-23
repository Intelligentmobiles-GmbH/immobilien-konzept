

class FaqChat extends HTMLElement {
    constructor() {
        super();
        this.chatContainer = this.createElementWithCLass("div", "faq-chat-container")
        const style = document.createElement("style");
        const chatHeader = this.createElementWithCLass("div", "faq-chat-header")

        const headerImage = this.createElementWithCLass("img", "faq-header-img")
        const username = this.createElementWithCLass("div", "faq-header-username")
        username.textContent = this.hasAttribute("user-name") ? this.getAttribute("user-name"): "username"

        chatHeader.appendChild(headerImage)
        chatHeader.appendChild(username)
        this.chatContainer.appendChild(chatHeader)

        const chatMsgContainer = this.createElementWithCLass("div", "faq-chat-msg-container")
        this.chatContainer.appendChild(chatMsgContainer)

        const chatFooter = this.createElementWithCLass("div", "faq-chat-footer")
        this.chatContainer.appendChild(chatFooter)

        this.appendChild(style)
        this.appendChild(this.chatContainer)
    }

    connectedCallback() {
        console.log("connected");
        this.updateStyles()

        this.addEventListener('addChatMsg', (event) => {
            console.log("hey");//this event is not being triggered
        });
        // wixData.query("FAQ").find().then(console.log).catch(console.log)
    }

    attributeChangedCallback(name, oldValue, newValue) {   
        if (name === 'in-msg') {
          this.querySelector('.faq-chat-msg-container').appendChild(this.getChatMessage(newValue, true));
        }
        if (name === 'out-msg') {
          this.querySelector('.faq-chat-msg-container').appendChild(this.getChatMessage(newValue));
        }
      }
    
      // Code for a special lifecycle function observedAttributes()
      // that checks specific attributes on the page. 
    static get observedAttributes() {
        return ['in-msg', 'out-msg'];
    }

    getChatMessage(msg, incoming = false) {
        const msgElement = this.createElementWithCLass("div", "faq-msg")
        msgElement.textContent = msg
        if (incoming) {
            msgElement.style.backgroundColor = "blue"
            msgElement.style.color = "#fff"
        } else {
            msgElement.style.backgroundColor = "green"
            msgElement.style.color = "#000"
        }
        return msgElement
    }

    updateStyles() {
        this.querySelector("style").textContent = `
            .faq-chat-container {
                height: 100%;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .faq-chat-header {
                background-color: red;
                display: flex;
                align-items: center;
                color: white;
            }
            .faq-chat-msg-container {
                flex: 2;
                align-items: center;
                color: white;
            }
            .faq-chat-footer {
                background-color: blue;
            }
        `;
    }

    createElementWithCLass(tag, style) {
        const element = document.createElement(tag)
        element.classList.add(style)
        return element
    }
}

customElements.define("faq-chat", FaqChat)