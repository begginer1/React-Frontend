import '../Css/ProfileCard.css'
export default function ProfileCard()
{
return(
    <div className='Profile'>
        <div className="card" style={{height:'100%'}}>
        <div className="card-header text-center" style={{backgroundColor:'#50C4ED'}}> 
            <h6>User Detail</h6>
        </div>
        <div className="card-body text-center" >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEVVYIDn7O3///9SXX7r8PDm6+xWYYFNWXtPW3xdZ4bY3eFJVXj6+vuxt8TV2uB7g5v19vheaYfy9fXp6u7Iy9Vye5VqdJBlb4yEjKKrsL+7v8t1fpfg4uiiqLiKkabO0dqZn7HFx9Geo7TP1dqRmau1vMelrbuIkKbT2XjpAAAM2klEQVR4nO2daZeqMBKGIwECstouCCLg0t3//x9OAL2iApKqomHmzPupb/c9yGMlVUllKaaNK9d1wzRPjkW2P+xWUjYzV7ttEGRFnORpKP8+8huw0Z7sfq3TPL5uTUdKWBbnnN0lf+aWKP9gH67xJl2H43GOQxim/um4j4Qke2C1qiIVu9+fk78OR3mXEQjXeVIE9me4JqfEtIOzbLb0r0NNmHpFEFliOFwDU1iRpKSGJCVMvWxrCw7Bu0Fyy95mMSkkHaGb7CMTQfegNKPAo+uTVIR+JjDGe4UU4tcnejMKQned7ByLiO4uy9kma4oYgicM/ThyqKzXFBfR0ce3VixhmBf2KHw1o13kWEYcYbgpVmIkvFpidT3hGFGEpyxSCOswcWuVbSYiTPc2mffsZeSrPcKxggn1K2jgAmQU2fqPCcPYHLf/vUqY0EEAiDDMg78z4E1cBDC3CiH0jyZ1fB8iyzxDBqzqhG6y/dsG+pDYntRHOcqE68KewoC1LLtQNqMq4ebw1x3wWXyrGhzVCMMjmxZQIppHNYejRJgGzsR8pZytUktVIHTzSVzouyxzo+BwhhOG8ehj0KHiljd8iDOYcF1M3gUb4tfBiEMJ0/3UUC8aPBgfSJhvZ2TASnw7EHEYYW7PDVAi2jkdYTJangIj7nhEhK43hyjYJscbEDU+E4bx1CA9ij+Pbz4ShjFdH+R3kT3Q/oz4iZAEkFtCOA5b7XbbUrvdijmOUFmcQiB+IHSxgOW6mXnIjt7pUsovVf108o7ZwVRag+tA/NAXPxDGqIEMF46deZdlahjGQkq/q/yH/F26vHiZ7aAyIpx98Kj9hAnCi3Jmbo9LSVPxdEj+VV8etybmi3QSOGEOB+T29ny5WeuD5P/Kiy2iNzi9k+I+QvhIxrL3XjoI70659PbguVn/6KaH0N8BATkLJN9wvJox9fbQtto7Ru0mTPfAz7Oin4sqX8Xo/0RAM/J992SqkzAsYB/GeLAxAHwlorEJoP2i6AyLXYSuB/woK0thfJWWV2hn7AyLXYQb4CeJI6SBNux4hKWbOe/yNh2EqQlqLtyMv1CAi8UXcJDBzY4MXDthuAWZkJs/OAvWVjQhn82sQ3tXbCc8AkP9GehjnmQUsA93jsMJT7BvkWdLAkAZ/X9hHtVsHdu0EaawtBPf5vg2WiFugC9waIuKLYRuAfsK7R8SvlI/NugN+LklZLQQJsDHB5hA+KwUGPntlmnGO2EK86Py6TRttJT+DfuWrZZFmzfC8AwMuQcKP3qXAVymFO9Lb2+EOcyPMv5NZ0JpRA84QH2fSL0ShgFwuGZTmlAaEdZMmRW8GvGV0AMCWhmlCaURf6ED49e0zQvhGjYeLTMJxIQn4LCKm2EvYQbdSGLRNlLZTKFvIoo+Qh+cKgmIARcL8KYPkfYQQhMX0kuTEwKjVpnS6CbcrIAPZSIhJ/wGpzJXmy7CMAPnLJ2cnBCerOVZ2EF4WoEJ+ZLWlZZzKPDWFh5t2glDcBZINgySmeGTlsCYL2Vdw1bCHGHCaARCxOus8jbCsIBvquS7EQgj+EqGaKRPH4Q+vFXMzYbSiP47oQtMVNayRyAETnIqiUeC+B/hGtEoGDNHIES8jmxU6zdCzGLo/AjlEOSNELqUNlNCvnslRCz3zpKQOf4L4R63OXZ+hOL6TOgid//Oj5BZ7hNhgjxCMUPCu6+5EYInhvMlvE8Ta8IUFQxnShilDcIYM36YKSGzvQYhfOo7Y0KePQiBy2mjEup4wnoRoyIErjaNSoi34W0lqiJEzAznTCjOd0Loat3cCa1qp1RJmGNjxUwJeZTfCBP8ga1ZEjKe1ITQNdH5E1rnsCJc47vhTAl5kFaEmBTUvAlZmZCShNCVuieNQEhwKqPcH82QSbZa1hj50h3eAZYpN6aF0PXkh3iUUC+QLhZGgg9i1m8oCde4HFQp84ceUCL+YGc8jO/WkjBFN1JrT77yVEpfIpNHUqIk3KAdzYp0K00D0UN7eSeXhDHWhjzwRyL00Rc4CE9jLmLV8EZ4HQdQIl7RhFeXuejvyURuXu8hBG6IfogfJCH6fKHtjUYYYzsit10Woh3NiIQEriZk6f844Zohl2RmT+gz3Lrh/AkThg6H8yYUMSvQI6NZE1oFQ6e7Z06YMXwKY9aEfM/wd3fNmzBg+Itn5k24ZTvsM+ZNyCIG3jT7X0K4Yvhn/J/w/4TjEtrz7ofo+SEN4Zzn+CVhhH7GnPM0ZT8kIJxxro3JeI/PeLPVSB2RwtHIMQ3B1zTjnHc5LsXuaCs123WLam6BTgizau1pBMJv/NpTNT8kWMQvEamXLnQ9pgBk4kyQpynFzZj0oLOeZtDTrM8SMcPunb2J7ygJ/SsNnyQ8EeRLa1l0NyosjCvZbZuOz9ZED+OEVypc6K5Fd9YE6xa1KMdu3wRh4iYnZC7iAFVTfEfWTNMrWWkCvqJYP7xpRdZMc4KR5E08kIQZ0UXrZM3U8OiqS4jCJVjHv4lvLzSES4J9dnc5nsawJ54esomCPskutJuqvRhrqnIAuNv2/skgNGG9n4ZgT1QtvjtRGDEnrPFS74ki2Nd2f96RYBKlE0wK/8nKyn1tIcHexFp8R+BrfMrr3+u9idqJrFlYMdqIOlXwqiQ29R5hfELxJr7DpjP0DcGG5cf73PYIrykSGbWcGGlCUkcqRzRrsr3690eucEbUPbL2VErc9uprCd33JgoMob6ka06l7uctKM7MPOQjCA2CdYqG+O5+ZobiwMVdqFvNCCcV1bv8O/eknQk9NOL6xJQis9mQdSY8f/gQD5QvK7+L4PzVkxrnD1PScnFnIOGSuFxP8wwp/hxw88HQAfieuKxi8xyw5tGlfmTEAC3U6OT1em7XtRKdx38WYI6hn0gDBXtcUUN0p8Lzs1fKCzX6hbwo2POdCtqJ1I3xSHW2v6T0BLVe7sXQaD/AUTzKpvukI+5K4vluE40uCVtqBoSv99No+C37Tc2A0ElfCDXSnj49IT9or4SUWcoZELbc9UWWVCw1OWHbfW0uVXa/1OSEbXfuaZibGF81NSGPWu5NpEzXTE7YvHy+eX8pnREnJuy4v1QLgXUtWjQxYdcdtIRGnJaw8x5hzSXYzllrYsLOu6AxNwk/a1LCp174eic7sEjPm4Ty7ImSMNO6CVOaaSKPVCf5KeGqYe+9+hrNWqL1q0pIsaP7pv7aCFpI0hOFp0xIsOG5Fl/117dAX/NZf4hyhUf9QjXwF68Fkd7qzBBkLUUB2JRxJaArP3v/qc4MQcTgO0hFlgtJM20puvpGiJ9FmaDVfD2mmIKL41tdspaaXdB6SDfxK3C7QoBHtIIBNbvKSiWIdsrNArofw9hji67zVUt9wLbqgGf4R/AIvrlNNwqsDzi30LQRgteEeZRhSiDqRgIv7MwU6h9Cy1VbdpYYyEqyS2/PwYxmaznZ9jqkgJUuzvffBNfS6cvvANgdnbiVpZ3QVY77IqLgKxEXktECMFpBe83jjnrAa7U+L8yf5YJur376vXNUGbndUZq7q6azr3BohdtX4msT9UUSqbVV5ZrOcgg+FJGvfi86+flDfeFtlfydp1qXWwuHnTK27H1C2D6bjKkXDGc8K9dWl10x+/xcbu49ZIDoY5SxY1h85L8dnbCX8PMuG84Db5TzsQ3GQX6VHzqqjn8g/LRDQ0SxP04DbSAu/O9AfPqmG9Wd1Ah7F4Ytp1iOcfr3nXH5ve1ndPoA+wm1vCsscRGMbr+HjCTqYXROvQz9hNqmNWZwOyAqMj5Quu5tO6IXZy2VqhUI3eR9cMPN4Hs8B9rFaMStsYPbnYFwGKFEfHE3nB888P5KFGNb7OArrzMQDiR8sSIXux/lVCEd4/dLGkBa8BPgZ0KJ+OgBYnW+/IUD7ULU/ef4aH5qooMIHxtRuHWdkq9irGLHHdBJPgMOIrwFDWGeJuarlcZmxcidD15UgbAc3XB2pZ9BwKSnv7LjNPdb4Am1NIi8qcEa0r2IH5bDXn0goZYSHfIlkr459wy2QYSa9jU11ZO+BvgYVUItnJqqoa/hr61AqLmLWfhSqcEGVCTUXH0OiIauAqhGOI/OqNBCAYTSjBPzqRkQQKi505pxuA8FE8qWOp0ZdcUWCiQszTiFxzEABgQSTtQblXsghrB0qn9rRmPxcapLTCgZ/xRRB78nnPAvmyqwgWIJS8Y/gcTwIQn/wK1KBwqIEISEJeOIg1VggKAlHNGOFHwkhLUdqSENQw8J+IgINXJDGkj30hAVoUY6XoWMP7tESFi1VjylrlP0vodICaXcsDQlrMEapfFo8TR6Qim3olR0PfK/61+hS42njUJY6k45gLP6TyPRlRqJsJLrul83zhbS26/LdjkWXKUxCe8qQSVqwwvJn8tfjUp2138A0qQTcxMP9E0AAAAASUVORK5CYII=" alt="profilepic" />
          <b><p>John Doe</p></b>
          <p>johndoe16@gmail.com</p>
          <span style={{display:'flex',justifyContent:'center'}}><p >UserID: </p>
          <p>124</p></span>
        </div>
        <div className="container">
        <span style={{display:'flex', justifyContent:'space-between'}}>
            <div ><p className='text'> 
                AddharNo:
            </p>
            <p>
                12233434
            </p></div>
            <div >
                <p className='text'>
                PanNo:
            </p>
            <p>
               FG12233434
            </p></div>
        </span>
        <span >
            <div style={{display:'flex'}}><p className='text'>
                Age:
            </p>
            <p>
                12
            </p></div>
           
        </span>
        <div style={{display:'flex',justifyContent:'space-between'}}><p className='text'>
                Address: 
            </p>
            <p>
                12 Streetd
            </p></div>
        </div>
        <div style={{backgroundColor:'#50C4ED', height:'10%'}}></div>
      </div>
         </div>
)
}