import React, { Component } from 'react'
import './perfil.css'
import Paises from './Paises';

export default class Perfil extends Component {
  constructor(props){
    super(props);
    this.state={
      ingreso:this.props.ingreso,
      msjError:'',
      emailValido:'',
      claveValida:'',
      mostrarAyudaClave:'d-none',
      claveCumplimiento:{
        tamano:'text-danger',
        minuscula:'text-danger',
        mayuscula:'text-danger',
        numero:'text-danger',
        especial:'text-danger'
      }
    }
  }

  manejoOnChange = (evento) => {
    if (evento.target.id===('email')){
      const valido = this.validaEmail(evento.target.value)
      this.setState({
        emailValido:valido ? 'is-valid' : 'is-invalid',
        msjError:''});
    }
    else if (evento.target.id===('clave')){
      const valido = this.validaClave(evento.target.value)
      this.setState({
        claveValida:valido ? 'is-valid' : 'is-invalid',
        msjError:'',
        claveCumplimiento:{
          tamano:this.validaTamClave(evento.target.value) ? ' text-success':'text-danger',
          minuscula:this.validaMinusClave(evento.target.value) ? ' text-success':'text-danger',
          mayuscula:this.validaMayusClave(evento.target.value) ? ' text-success':'text-danger',
          numero:this.validaNumClave(evento.target.value) ? ' text-success':'text-danger',
          especial:this.validaEspClave(evento.target.value) ? ' text-success':'text-danger'
        }});
    }
  }

  validaEmail(email) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  }

  validaTamClave(clave){
    return (/(?=.{8,})/.test(clave));
  }

  validaMinusClave(clave){
    return (/(?=.*[a-z])/.test(clave));
  }

  validaMayusClave(clave){
    return (/(?=.*[A-Z])/.test(clave));
  }

  validaNumClave(clave){
    return (/(?=.*[0-9])/.test(clave));
  }

  validaEspClave(clave){
    return (/(?=.*[!@#_\-\.\|\$%\^&\*\(\)\=])/.test(clave));
  }

  validaClave(clave){
    return this.validaTamClave(clave) && this.validaMinusClave(clave) && this.validaMayusClave(clave) &&
           this.validaNumClave(clave) && this.validaEspClave(clave)
  }

  manejoOnFocus = () => {
    this.setState({mostrarAyudaClave:'d-block'})
  }

  manejoOnBlur = () => {
    this.setState({mostrarAyudaClave:'d-none'})
  }

  render() {
    if (this.props.ingreso)
      return(
        <div class='border m-3 p-3 bg-gradient-primary'>
        <h3 className='text-primary'><small>{this.props.formName}</small></h3>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputName1" className='text-secondary'>
                    <small>{this.props.input1}</small></label>
                    <div class='input-group'>
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user fa-fw"></i></span>
                        </div>
                        <input type="text" class="form-control" id="inputFirstName" placeholder={this.props.input1}/>
                    </div>
                </div>
                <div class="form-group col-md-6">
                <label for="inputName1" className='text-secondary'>
                    <small>{this.props.input2}</small></label>
                    <div class='input-group'>
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user fa-fw"></i></span>
                        </div>
                        <input type="text" class="form-control" id="inputLastName" placeholder={this.props.input2}/>
                    </div>
                </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputName1" className='text-secondary'>
                  <small>{this.props.input3}</small></label>
                  <div class='input-group'>
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-envelope-o fa-fw"></i></span>
                    </div>
                    <input type="email" class={"form-control "+this.state.emailValido} id="email" 
                        placeholder={this.props.input3}
                        onChange={this.manejoOnChange}/>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputName1" className='text-secondary'>
                    <small>{this.props.input4}</small></label>
                  <div class='input-group'>
                    <div class="input-group-prepend">
                       <span class="input-group-text"><i class="fa fa-key fa-fw"></i></span>
                    </div>
                    <input type="password" class={"form-control "+this.state.claveValida} id="clave" 
                     placeholder={this.props.input4}
                    onChange={this.manejoOnChange}
                    onFocus={this.manejoOnFocus}
                    onBlur={this.manejoOnBlur}/>
                  </div>
                </div>
                <div class={"container mx-0 px-0 "+this.state.mostrarAyudaClave}>
                  <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                      <div class="card" style={{width: '14rem'}}>
                        <div class="card-body my-0 py-0 px-2">
                          <small class={"card-text text-secondary "+this.state.claveCumplimiento.tamano}>Mínimo 8 carácteres</small><br/>
                          <small class={"card-text text-secondary "+this.state.claveCumplimiento.minuscula}>Al menos una letra minúscula</small><br/>
                          <small class={"card-text text-secondary "+this.state.claveCumplimiento.mayuscula}>Al menos una letra mayúscula</small><br/>
                          <small class={"card-text text-secondary "+this.state.claveCumplimiento.numero}>Al menos una número</small><br/>
                          <small class={"card-text text-secondary "+this.state.claveCumplimiento.especial}>Un carácter especial</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="form-group">
            <label for="inputName1" className='text-secondary'>
                    <small>{this.props.input5}</small></label>
                <div class='input-group'>
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-home fa-fw"></i></span>
                    </div>
                    <input type="text" class="form-control" id="inputAddress" placeholder={this.props.input5}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputName1" className='text-secondary'>
                    <small>{this.props.input7}</small></label>
                    <Paises></Paises>
                </div>
                <div class="form-group col-md-6">
                <label for="inputName1" className='text-secondary'>
                    <small>{this.props.input6}</small></label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label text-secondary" for="gridCheck">
                        <small>Estoy de acuerdo con el registro de mis datos personales</small>
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">{this.props.buttonName}</button>
        </div>
      )
    else
      return (
        <div className='m-3 p-3' align='center'>
            <p className='fa fa-warning size'/>
            <h2>No esta logeado en el sistema</h2>
            <p>Debe ingresar con usuario y contraseña para hacer 
                uso de esta funcionalidad</p>
        </div>
    )
  }
}
