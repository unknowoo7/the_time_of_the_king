import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg">
    <div class="gradient"></div>
    <div class="content">
        <h1>
            Второе пришествие
        </h1>
        
        <div class="time">
            ** : 22 : 29 :&nbsp;<span class="seconds">19</span>
        </div>
        
        <div class="quote">
            "Се, гряду скоро, и возмездие Мое со Мною, чтобы воздать каждому по делам его.”
        </div>
        
        <div class="link">
            (Откр. 22:12)
        </div>
    </div>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
