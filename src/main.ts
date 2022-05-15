import "./style.css";
import Typewriter from "./typewriter";

const typewriter = new Typewriter(document.body, { loop: true })

typewriter
.typeString("TYPE TYPE TYPE")
.pauseFor(1000)
.TypeString("\n\nfunctio")
.deleteChars(7)
.typeString("const temp")
.pauseFor(150)
.deleteAll(10)
.typeString("WHY WHY WHY")
.pauseFor(1000)
.typeString("\n\nYES YES TEST")
.pauseFor(1000)
.typeString("\n\nTEST TEST TEST")
.pauseFor(1000)
.deleteAll(10)
.start()

