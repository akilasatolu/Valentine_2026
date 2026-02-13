import { useState } from 'react'
import './App.css'

function App() {
  const [letterState, setLetterState] = useState(0);

  return (
    <>
      <div className="container">
        <button className={`envelope ${letterState === 0 ? 'close' : (letterState === 1 ? 'open' : 'open show')}`} onClick={() => setLetterState(letterState < 2 ? letterState + 1 : 2)}>
            <div className="front flap"></div>
            <div className="front pocket"></div>
            <div className="letter">
                <div className="words line1">To You❤️</div>
                <div className='words line2'>{letterState === 2 ? "Happy Valentine's Day!" : ''}</div>
                <div className='words line3'>{letterState === 2 ? "I Love You So Much❤️" : ''}</div>
                <div className='words line4'>{letterState === 2 && <>Gift For You 😘 👉 <a className='giftLink' target='_blank' href="https://www.google.com/search?sca_esv=18fb8b8532389487&sxsrf=ANbL-n4HhZZhb8cR7n-AHIQgHpK2Q3i-uw:1770997259640&q=%E3%83%90%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%B3+%E3%83%87%E3%83%BC&oi=ddle&noiga=1&ct=457785615&hl=ja&si=AL3DRZEaipurC9pse1xO2aCwuJWfKA_Njx1c7Qs8ap9rx81jmlLeQMIndL-VYBP1-rpXiNDkR-Cn8Azqjju3lbDCysdgRMMgFaIcx-DT9yUfswrE7GoCFWClMJMyBY4W_QKipFKUnc2Qnh1bSfMUTLi95Wix_5CHzPY3iIdLhXYT2AWoEBQLbSH6i99aVTbv28EjrQqUtjYD&sa=X&ved=0ahUKEwistbr05taSAxU6r1YBHSJvI_QQPQgO&biw=1440&bih=696&dpr=2">🎁</a></>}</div>
                <div className='words line5'>{letterState === 2 ? "From Me" : ''}</div>
            </div>
            <div className="hearts">
                <div className="heart a1"></div>
                <div className="heart a2"></div>
                <div className="heart a3"></div>
            </div>
        </button>

        <p className='description'>
          Click on the envelope!!❤️
        </p>
      </div>
    </>
  )
}

export default App







// Inspired by:
//     * https://codepen.io/MrBlank/pen/JjXxovL 
