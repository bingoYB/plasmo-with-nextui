import { NextUIProvider } from "@nextui-org/react"
import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect } from "react"
import TestModal from "~testmodal"

export const config: PlasmoCSConfig = {
  // matches: ["https://www.plasmo.com/*"]
}

export function getShadowContainer() {
  return document
    .querySelector("#test-shadow")
    .shadowRoot.querySelector("#plasmo-shadow-container")
}

export const getShadowHostId = () => "test-shadow"

export const getStyle = () => {
  const style = document.createElement("style")

  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  console.log(getShadowContainer())

  useEffect(() => {
    const dom = getShadowContainer()
    if (dom) {
      dom.classList.add("dark")
      dom.setAttribute("data-theme", "dark")
    }
  }, [])

  return (
    <NextUIProvider>
      <TestModal />
    </NextUIProvider>
  )
}

export default PlasmoOverlay
