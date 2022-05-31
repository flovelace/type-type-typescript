import "./style.css"
import Typewriter from "./Typewriter"

const typewriter = new Typewriter(
  document.querySelector(".whitespace") as HTMLDivElement,
  {
    loop: true,
    typingSpeed: 10,
    deletingSpeed: 10,
  }
)

typewriter
  .typeString("TEST STRING")
  .pauseFor(1000)
  .typeString("\n\n")
  .deleteChars(7)
  .pauseFor(150)
  .deleteAll(10)
  .typeString("TEST TEST TEST")
  .pauseFor(1000)
  .typeString("\n\nTEXT TEXT")
  .pauseFor(1000)
  .typeString("\n\ntest data test data")
  .pauseFor(1000)
  .deleteAll(10)
  .start()

