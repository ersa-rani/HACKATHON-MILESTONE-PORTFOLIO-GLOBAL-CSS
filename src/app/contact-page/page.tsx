export default function Contact() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-cont.jpeg')" }}
    >
      <div className="f-div">
        <form action="#" method="POST" id="resume-form">
          <div className="puff-in-center">
            <div className="border">
              <h2>
                <b style={{ color: "white" }}>FORM</b>
              </h2>
              <p>
                <label>
                  <b>*UserName:</b>
                  <input
                    type="text"
                    name="userName"
                    placeholder="enter userName"
                    id="userName"
                    required
                  />
                </label>
                <br />
                <label>
                  <b>*Name:</b>
                  <input
                    type="text"
                    name="Name"
                    placeholder="enter your name"
                    id="name"
                    required
                  />
                </label>
                <br />

                <label>
                  <b>*Email:</b>
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    id="email"
                    required
                  />
                </label>
                <br />
                <label>
                  <b>*Password:</b>
                  <input
                    type="password"
                    name="password"
                    placeholder="enter strong password"
                    id="password"
                    required
                  />
                </label>
                <br />
                <b>*Gender:</b>

                <label className="radio">
                  <input type="radio" name="gender" value="male" id="male" /> Male
                </label>

                <label className="radio">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                  />
                  Female
                </label>
                <br />
                <label>
                  <b>*Nationality:</b>
                  <select name="nationality" id="nationality">
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="China">China</option>
                    <option value="America">America</option>
                    <option value="Antartica">Antartica</option>
                  </select>
                </label>
                <br />
                <label>
                  <b>*Qualification:</b>
                  <select name="Qualification" id="quali">
                    <option value="Matric">Matric</option>
                    <option value="Inter">Inter</option>
                    <option value="bachelor&apos;s">Bachelor&apos;s</option>
                    <option value="Master">Master</option>
                  </select>
                </label>
                <br />
                <b>*Skills:</b>
                <input
                  type="text"
                  name="comment"
                  placeholder="write your experiences...."
                  id="skill"
                  required
                />
              </p>
              <input type="submit" className="submit" value="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
