'use client'

export default function Home() {

    const userLogin = () => {

    }
  return (
    <>
      <div>
          <form onSubmit={userLogin}>

              <div className="form-floating mb-3">
                  <input type="text"
                     className="form-control shadow-none"
                     id="email"
                  />
                  <label htmlFor="task">Email</label>
              </div>

              <div className="form-floating mb-3">
                  <input
                      type="password"
                      className="form-control shadow-none"
                      id="email"
                  />
                  <label htmlFor="task">Password</label>
              </div>

              <div className="form-floating mb-3">
                  <button className="btn btn-primary">Login</button>
              </div>

          </form>
      </div>
    </>
  )
}
