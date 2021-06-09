import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

/**
 * `valle-input`
 * Awesome valle-input - web component using Polymer 3x
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ValleInput extends PolymerElement {

  static get properties() {
    return {
      label: String,
      type: {
        type: String,
        value: 'text'
      },
      validateby: String,
      placeholder: String,
      helpertext: String,
      minlength: {
        type: Number,
        observer: '_minLengthControl'
      },
      maxlength: {
        type: Number,
        observer: '_maxlengthControl'
      },
      errortext: String,
      pattern: String,
      value: {
        type: String,
        reflectToAttribute: true
      },
      error: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      required: {
        type: Boolean,
        value: false,
        observer: '_toogleRequired'
      },
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_toogleDisabled'
      },
      autofocus: {
        type: Boolean,
        value: false
      },
      propercase: {
        type: Boolean,
        value: false
      },
      uppercase: {
        type: Boolean,
        value: false
      },
      lowercase: {
        type: Boolean,
        value: false
      },
      capitalize: {
        type: Boolean,
        value: false
      },
      cpf: {
        type: Boolean,
        value: false
      },
      cnpj: {
        type: Boolean,
        value: false
      },
      cep: {
        type: Boolean,
        value: false
      },
      real: {
        type: Boolean,
        value: false
      },
      dolar: {
        type: Boolean,
        value: false
      },
      step: {
        type: Number,
        value: 0
      },
      autocomplete: {
        type: String,
        value: 'off'
      },
      name: String,
      tooltip: String,
      tooltippos: String,
      tooltiplength: String,
      min: Number,
      max: Number,
      mask: String,
    };
  };

  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          position: relative;
          /* overflow: hidden; */
          width: var(--valle-input-width, 100%);
          --tooltip-border-radius: 2px;
          --tooltip-color: rgba(16, 16, 16, 0.95);
          --tooltip-text-color: #fff;
          --tooltip-font-size: 12px;
          --tooltip-move: 4px;
        }

        .visual-hidden {
          position: absolute;
          left: -10000px;
        }

        .input {
          border: 2px solid var(--valle-input-border-color, rgb(166, 166, 166));
          color: rgba(0, 0, 0, .87);
          display: inline-block;
          font-size: 16px;
          margin-top: 29px;
          outline: 0;
          padding: 16px 12px 16px 16px;
          width: 100%;
          border-radius: 4px;
          box-sizing: border-box;
          vertical-align: middle;
          transition: all .1s linear;
          height: 54px;
        }

        .input__number {
          text-align: right;
        }

        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        input[type=number] {
          -moz-appearance: textfield;
        }

        .input:hover {
          border-color: #000;
        }

        .input:focus {
          border-color: var(--valle-input-color, rgb(5, 159, 183));
        }

        .input::placeholder {
          color: rgba(0, 0, 0, .54);
        }

        .label {
          pointer-events: none;
          color: rgba(0, 0, 0, .54);
          display: block;
          left: 14px;
          position: absolute;
          top: 21px;
          transition: all .1s linear;
          box-sizing: border-box;
          background-color: #fff;
          font-size: 12px;
          padding: 0 4px;
        }

        .input:focus ~ .label {
          color: var(--valle-input-color, rgba(5, 159, 183, .87));
        }

        .description {
          color: rgba(0, 0, 0, .54);
          display: block;
          font-size: 12px;
          padding-top: 8px;
          margin-left: 16px;
        }

        :host([type="date"]) .input {
          font-family: 'Roboto', 'Noto', sans-serif;
          padding: 13.41px 12px 13.41px 16px;
        }

        :host([error]) .description,
        :host([error]) .label,
        :host([error]) .input:focus + .label {
          color: rgba(255, 0, 0, .87);
        }

        :host([error]) .input {
          border: 2px solid rgb(255, 0, 0);
        }

        :host([disabled]) .input {
          background-color: initial;
          border: 2px solid rgba(0, 0, 0, .12);
          color: rgba(0, 0, 0, .38);
          cursor: no-drop;
        }

        :host([disabled]) .label {
          color: rgba(0, 0, 0, .38);
        }

        :host([required]) .label::after {
          content: ' *';
        }

        .tooltip {
          overflow: visible;
          width: 24px;
          height: 24px;
          position: absolute;
          cursor: help;
          top: 30px;
          right: 1px;
          border-radius: 3px;
          transition: background .3s;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .tooltip:focus {
          background: #ecebeb;
          outline: none;
        }

        .tooltip svg {
          fill: var(--icon-tooltip-color, #000);
          width: 18px;
          height: 18px;
        }

        .tooltip:hover svg{
          fill: var(--valle-input-color, rgba(5, 159, 183, .87));
        }

        .tooltip::after {
          opacity: 0;
          pointer-events: none;
          transition: all 0.18s ease-out 0.18s;
          text-indent: 0;
          font-weight: normal;
          font-style: normal;
          text-shadow: none;
          font-size: var(--tooltip-font-size);
          background: var(--tooltip-color);
          border-radius: 2px;
          color: var(--tooltip-text-color);
          border-radius: var(--tooltip-border-radius);
          content: attr(id);
          padding: .5em 1em;
          position: absolute;
          white-space: nowrap;
          z-index: 10;
        }

        .tooltip::before {
          width: 0;
          height: 0;
          border: 5px solid transparent;
          border-top-color: var(--tooltip-color);
          opacity: 0;
          pointer-events: none;
          transition: all 0.18s ease-out 0.18s;
          content: "";
          position: absolute;
          z-index: 10;
        }

        .tooltip:hover::before, .tooltip:hover::after,
        .tooltip:focus::before, .tooltip:focus::after {
          opacity: 1;
          pointer-events: none;
        }

        :host([tooltippos*="-right"]) .tooltip::after {
          right: 0;
        }

        :host([tooltippos*="-right"]) .tooltip::before {
          right: 5px;
        }

        :host([tooltippos*="-right"]) .tooltip:hover::after {
          transform: translate(0, 0);
        }

        :host([tooltippos*="-right"]) .tooltip:hover::before {
          transform: translate(0, 0);
        }

        :host([tooltippos^="top"]) .tooltip::before,
        :host([tooltippos^="top"]) .tooltip::after {
          bottom: 100%;
          transform-origin: top;
          transform: translate(0, var(--tooltip-move));
        }

        :host([tooltippos^="top"]) .tooltip::after {
          margin-bottom: 10px;
        }

        :host([tooltippos="top"]) .tooltip::before, :host([tooltippos="top"]) .tooltip::after {
          left: 50%;
          transform: translate(-50%, var(--tooltip-move));
        }

        :host([tooltippos="right"]) .tooltip:hover::after {
          transform: translate(0, -50%);
        }

        :host([tooltippos="right"]) .tooltip:hover::before {
          transform: translate(0, -50%);
        }

        :host([tooltippos="right"]) .tooltip:hover::after, :host([tooltippos="right"]) .tooltip:hover::before {
          left: 100%;
          top: 50%;
          transform: translate(calc(var(--balloon-move) * -1), -50%);
        }

        :host([tooltippos="right"]) .tooltip:hover::after {
          margin-left: 10px;
        }

        :host([tooltippos="right"]) .tooltip:hover::before {
          width: 0;
          height: 0;
          border: 5px solid transparent;
          border-right-color: var(--tooltip-color);
        }

        :host([tooltiplength]) .tooltip::after {
          white-space: normal;
        }

        :host([tooltiplength="small"]) .tooltip::after {
          width: 80px;
        }

        :host([tooltiplength="medium"]) .tooltip::after {
          width: 150px;
        }

        :host([tooltiplength="large"]) .tooltip::after {
          width: 260px;
        }

      </style>

      <input
        name=[[name]]
        id="input"
        class="input"
        type=[[type]]
        placeholder=[[placeholder]]
        aria-labelledby="inputLabel"
        aria-describedby="description"
        autofocus=[[autofocus]]
        value=[[value]]
        step=[[step]]
        maxlength=[[maxlength]]
        minlength=[[minlength]]
        autocomplete=[[autocomplete]]
        min=[[min]]
        max=[[max]]
      >

      <template is="dom-if" if=[[tooltip]]>
        <span class="tooltip" role="tooltip" id=[[tooltip]]>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px">
            <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <small class="visual-hidden">[[tooltip]]</small>
        </span>
      </template>

      <template is="dom-if" if={{_isNoError(helpertext,error)}}>
        <small id="description" class="description">[[helpertext]]</small>
      </template>

      <template is="dom-if" if=[[error]]>
        <span role="alert" id="description" class="description">
          [[errortext]]<small class="visual-hidden">: [[helpertext]]</small>
        </span>
      </template>

      <label id="inputLabel" class="label">[[label]]</label>
    `;
  };

  ready() {
    super.ready();

    if (this.mask) {

      if(this.mask[0] === '#') {
        this.$.input.classList.add('input__number')
      }

      this.addEventListener('blur', this._custom_mask.bind(this));
      this.addEventListener('focus', this._remove_custom_mask.bind(this));
    };

    if (this.required) {
      this.addEventListener('blur', this._validateRequired.bind(this));
    };

    if (this.pattern) {
      this.addEventListener('blur', () => this._validate(this.pattern));
    } else if (this.validateby === 'name') {
      this.addEventListener('blur', () => this._validate('[A-z][ ][A-z]'));
    };

    if (this.cpf) {
      this.placeholder = 'xxx.xxx.xxx-xx';
      this.maxlength = 14;
      this.addEventListener('keypress', () => this._mask(this._maskCpf));
    };

    if (this.cnpj) {
      this.placeholder = 'xx.xxx.xxx/xxxx-xx';
      this.maxlength = 18;
      this.addEventListener('keypress', () => this._mask(this._maskCnpj));
    };

    if (this.cep) {
      this.placeholder = 'xxxxx-xxx';
      this.maxlength = 9;
      this.addEventListener('keypress', () => this._mask(this._maskCep));
    };

    if (this.dolar) {
      this.placeholder = '$';
      this.addEventListener('keypress', () => this._mask(this._maskDolar));
    };

    if (this.real) {
      this.placeholder = 'R$';
      this.addEventListener('keypress', () => this._mask(this._maskReal));
    };

    if (this.maxlength) {
      this._maxlengthControl.bind(this, this.maxlength)();
    };

    if (this.minlength) {
      this._minLengthControl.bind(this, this.minlength)();
      this.addEventListener('blur', () => this._validateMinlength(this.minlength));
    };

    if (this.uppercase) {
      this.addEventListener('input', () => this._mask(this._upperCaseControl.bind(this)));
    };

    if (this.lowercase) {
      this.addEventListener('input', () => this._mask(this._lowerCaseControl.bind(this)));
    };

    if (this.propercase || this.capitalize) {
      this.addEventListener('input', () => this._mask(this._properCaseControl.bind(this)));
    };

    this.addEventListener('input', this._bindValue.bind(this));

  };

  _upperCaseControl(value) {
    return value.toUpperCase();
  };

  _lowerCaseControl(value) {
    return value.toLowerCase();
  };

  _toCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  _properCaseControl(value) {
    const listOfWords = value.split(' ');
    const prepositions = ['da', 'de', 'do', 'das', 'dos', 'e', 'ou', 'em', 'um', 'uma', 'com', 'é', 'à', 'a', 'o'];

    const newListOfWords = listOfWords.map( word => {
      const wordLowerCase = word.toLowerCase();

      if (this.propercase) {
        return prepositions.includes(wordLowerCase)
          ? wordLowerCase
          : this._toCapitalize(wordLowerCase);
      };

      if (this.capitalize) {
        return this._toCapitalize(wordLowerCase);
      };
    });

    const newPhrase = newListOfWords.join(' ');

    return this._toCapitalize(newPhrase);
  };

  _remove_custom_mask(type) {

    const pattern = this.mask;
    let data = this.$.input.value;

    // integer

    if (pattern[0] === '#') {
      if (pattern.indexOf('.') === -1) {

        if(pattern.indexOf('.')) {
          data = String(data).split(',')[0]
        }

        this.$.input.value = String(data).replace(/\./g, "")
      } else {

        // float

        this.$.input.value = String(data).replace(/\./g, "")
      }


    }
  }

  _custom_mask(type) {
    console.log(this.$.input.value)
    this.$.input.value = this._patternFormater(this.mask, this.$.input.value);
  }

  _patternFormater(pattern, data) {

    if (pattern[0] === 'X') {

      let regex = '';

      for(var i = 1; pattern.indexOf('X') >= 0; ++i) {
          pattern = pattern.replace('X', '$'+i);
          regex += '(\\d)';
      }

      regex += '[^]*';

      return String(data).replace(new RegExp(regex), pattern);

    }

    if (pattern[0] === '#') {

      if (pattern.indexOf('.') === -1) {
        console.log('not found .')

        if(pattern.indexOf('.')) {
          data = String(data).split(',')[0]
        }

        return String(data).replace(/(.)(?=(\d{3})+$)/g,'$1.');
      }

      // (patter) total digits after .
      const patternDeciamls = pattern.split('.')[1].length;

      const dataDigits = String(data).split(',');

      let newValue = '';

      // (data) verify and get numbers before .

      if(dataDigits[0]) {
        newValue = String(dataDigits[0]).replace(/(.)(?=(\d{3})+$)/g,'$1.');
      } else {
        newValue = '0';
      }

      // (data) Verify and get digits after .

      if(dataDigits[1]) {

        newValue = newValue + ',' + dataDigits[1].substr(0, patternDeciamls);

        if(dataDigits[1].length < patternDeciamls) {

          const total = patternDeciamls - dataDigits[1].length;

          for (let index = 0; index < total; index++) {
            newValue = newValue + '0'

          }
        }

      } else {
        newValue = newValue + ',' + pattern.split('.')[1];
      }

      return newValue;

    }


  }

  _mask(type) {
    setTimeout(this.execmask(type), 1);
  };

  execmask(type) {
    this.$.input.value = type(this.$.input.value);
  };

  _maskCpf(value) {
    value=value.replace(/\D/g,"");
    value=value.replace(/(\d{3})(\d)/,"$1.$2");
    value=value.replace(/(\d{3})(\d)/,"$1.$2");
    value=value.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return value;
  };

  _maskCnpj(value) {
    value=value.replace(/\D/g,"");
    value=value.replace(/^(\d{2})(\d)/,"$1.$2");
    value=value.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
    value=value.replace(/\.(\d{3})(\d)/,".$1/$2");
    value=value.replace(/(\d{4})(\d)/,"$1-$2");
    return value;
  };

  _maskCep(value) {
    value=value.replace(/\D/g,"");
    value=value.replace(/^(\d{5})(\d)/,"$1-$2");
    return value;
  };

  _maskReal(value) {
    value=value.replace(/\D/g,"");
    value=value.replace(/(\d{1})(\d{17})$/,"$1.$2");
    value=value.replace(/(\d{1})(\d{13})$/,"$1.$2");
    value=value.replace(/(\d{1})(\d{10})$/,"$1.$2");
    value=value.replace(/(\d{1})(\d{7})$/,"$1.$2");
    value=value.replace(/(\d{1})(\d{1})$/,"$1,$2");
    return value;
  };

  _bindValue() {
    this.value = this.$.input.value;
  };

  _isNoError(helpertext, error) {
    return helpertext && !error;
  };

  _toogleRequired(required) {
    required
      ? this.$.input.setAttribute('aria-required', true)
      : this.$.input.removeAttribute('aria-required');
  };

  _toogleDisabled(disabled) {
    disabled
      ? this.$.input.setAttribute('disabled', true)
      : this.$.input.removeAttribute('disabled');
  };

  _validateRequired() {
    const valueInput = this.$.input.value;
    const isEmpty = valueInput.length === 0;

    isEmpty
      ? this.setAttribute('error', true)
      : this.removeAttribute('error');
  };

  _maxlengthControl(maxlength) {
    const input = this.$.input;

    input.setAttribute('maxlength', maxlength);

  };

  _minLengthControl(minlength) {
    const input = this.$.input;

    input.setAttribute('minlength', minlength);

  };

  _validateMinlength(minlength) {
    const valueInput = this.$.input.value;
    const lengthInput = valueInput.length;

    lengthInput < minlength
      ? this.setAttribute('error', true)
      : this.removeAttribute('error');
  };

  _validate(pattern) {
    const valueInput = this.$.input.value;

    if(this.$.input.value !== '') {
      const regExp = new RegExp(pattern);
      const result = regExp.test(valueInput);

      !result
        ? this.setAttribute('error', true)
        : this.removeAttribute('error');
    }

  };
};

window.customElements.define('valle-input', ValleInput);
