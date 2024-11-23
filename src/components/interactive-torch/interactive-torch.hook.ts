import { useEffect } from "react"

export function useInteractiveTorch(canvasId: string) {
  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement
    console.log(canvas)
  
    if (canvas === null) return

    canvas.width = canvas.getBoundingClientRect().width
    canvas.height = canvas.getBoundingClientRect().height
    
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    let torchLit = false
    let message = ''

    let flickerRate = 0
    let mouseX = 0
    let mouseY = 0

    function castLight() {
      if (canvas === null) return

      if (!torchLit) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = 'white'
        ctx.font = 'normal 16px consolas'
        ctx.textAlign = 'center'
        ctx.fillText(message, canvas.width / 2, 150, canvas.width - 200)
        
        return requestAnimationFrame(castLight)
      }

      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const pxx = (i % (canvas.width * 4)) / 4
        const pxy = Math.floor(i / (canvas.width * 4))

        data[i] = 0
        data[i + 1] = 0
        data[i + 2] = 0
        data[i + 3] = Math.min(255, distanceBetween(mouseX, mouseY, pxx, pxy) * 2 - 100 - flickerRate)
      }

      ctx.putImageData(imageData, 0 , 0)

      requestAnimationFrame(castLight)
    }

    function distanceBetween(x1: number, y1: number, x2: number, y2: number) {
      const noise = Math.random() * 5
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) - noise
    }

    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
    })

    document.addEventListener('keypress', (event) => {
      if (event.key.toLowerCase() === 't') torchLit = !torchLit
    })

    setInterval(() => {
      flickerRate = Math.random() * 25
    }, 100)

    setInterval(() => {
      const messages = [
        `Press 'T' to light your torch.`,
        `Press 'T' to light your torch.`,
        `Press 'T' to light your torch.`,
        `It's very dark here.`,
        `I'm scared`,
        `Did you hear that?`,
      ]

      message = messages[Math.floor(Math.random() * messages.length)]

      setTimeout(() => message = '', 3000)
    }, 5000)

    function blink() {
      document.documentElement.style.setProperty('--cursor', 'none');

      setTimeout(() => {
        document.documentElement.style.setProperty('--cursor', 'var(--eyes)');

        setTimeout(blink, 1000 + Math.floor(Math.random() * 2000))
      }, 200)
    }

    requestAnimationFrame(castLight)
    blink()
  })
}