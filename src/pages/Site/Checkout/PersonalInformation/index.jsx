import React from "react";
import "./styles.scss";

const PersonalInformation = () => {
  return (
    <div className="personal-information">
      {/* <>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <button class="btn btn--red">Continuar</button>
      </> */}
      {/* TODO: creation of a login */}
      {/* <>
        <label for="phoneNumber">Tu teléfono</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">+56</div>
          </div>
          <input type="text" class="form-control" id="phoneNumber" />
        </div>
        <small id="phoneNumberInfo" class="form-text text-muted">
          Help text
        </small>
      </> */}
      <div className="personal-information__item">
        <span>Nombre: Javier</span>
      </div>
      <div className="personal-information__item">
        <span>Email: youremail@somemail.com</span>
      </div>
      <div className="personal-information__item">
        <span>Teléfono: +56911992235</span>
      </div>
      <div className="personal-information__item">
        <button className="btn btn--none">Cambiar teléfono</button>
      </div>
    </div>
  );
};

export default PersonalInformation;
