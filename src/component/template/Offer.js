import React, { useState } from 'react'

function Offer() {

  const [email, setEmail] = useState("")

  async function addEmail(event) {
    
    event.preventDefault()

    const response = await fetch("http://localhost:5000/newsletters", {
      method: "POST",
      headers:{
        "Content-Type": "application/icon"
      },
      body: JSON.stringify({email}),
    })

    if (response.status ===201){
      setEmail("")
      alert("سفارش شما موفقیت ثبت گردید😊")
    }
  }

  return (
    <div className='offer container-fluid my-5 py-5 text-center position-relative overlay-top active_nav_link
    overlay-bottom'>
        <div className='container py-5'>
            <h1 className='display-3 text-primary my-3 font-weight-bold '>۵۰٪ تخفیف ویژه</h1>
            <h1 className='text-white my-3 font-weight-normal'>پیشنهاد مخصوص یکشنبه‌ها</h1>
            <h4 className='text-white font-weight-normal
             mb-4 pb-3'>فرصت طلایی برای چیل کردن با نوشیدنی‌های خاص کافه‌چیل!</h4>

             <form className='form-inline justify-content-center mb-4'>
                <div className='input-group'>
                    <input type='text' className='form-control p-4'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='ایمیل خود را وارد کنید' style={{height: "60px"}}/>

                    <div className='input-group-append'>
                        <button 
                        onClick={addEmail}
                        className='btn btn-primary font-weight-bold px-4' 
                        type='submit'>ورود</button>
                    </div>
                </div>
             </form>
        </div>
    </div>
  )
}

export default Offer