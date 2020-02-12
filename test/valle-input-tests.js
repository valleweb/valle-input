import { blur } from '@polymer/iron-test-helpers/mock-interactions';

suite('valle-input required', () => {

  let inputRequired;

  setup(() => {
    inputRequired = fixture('inputRequired');
  });

  test('Should add error attribute if the input is empty', () => {
    const input = inputRequired.shadowRoot.querySelector('input');

    assert.isFalse(inputRequired.hasAttribute('error'));
    assert.equal(input.value, '');

    blur(input);

    assert.isTrue(inputRequired.hasAttribute('error'));
  });

});

suite('valle-input pattern', () => {

  let inputWithPattern;

  setup(() => {
    inputWithPattern = fixture('inputWithPattern');
  });

  test('Should validate based in pattern regexp', () => {
    const input = inputWithPattern.shadowRoot.querySelector('input');

    assert.isFalse(inputWithPattern.hasAttribute('error'));

    MockInteractions.blur(input);
    assert.isTrue(inputWithPattern.hasAttribute('error'));

    input.value = 'Valle web';

    MockInteractions.blur(input);
    assert.isFalse(inputWithPattern.hasAttribute('error'));

    input.value = 'Valle wedsfas';

    MockInteractions.blur(input);
    assert.isTrue(inputWithPattern.hasAttribute('error'));

  });
});

suite('valle-input maxlength', () => {

  let inputWithMaxLength;

  setup(() => {
    inputWithMaxLength = fixture('inputWithMaxLength');
  });

  test('Should add readonly on input when value to be equal maxlength', () => {
    const input = inputWithMaxLength.shadowRoot.querySelector('input');
    const maxLength = input.getAttribute('maxlength');

    assert.isTrue(input.hasAttribute('maxlength'));
    assert.equal(maxLength, '7');

  });
});

suite('valle-input type', () => {

  let inputTypePassword,
      inputTypeEmail,
      inputTypeNumber,
      inputTypeTel;

  setup(() => {
    inputTypePassword = fixture('inputTypePassword');
    inputTypeEmail = fixture('inputTypeEmail');
    inputTypeNumber = fixture('inputTypeNumber');
    inputTypeTel = fixture('inputTypeTel');
  });

  test('Should render a password input', () => {
    const input = inputTypePassword.shadowRoot.querySelector('input');
    const typeInput = input.type;

    assert.equal(typeInput, 'password');
  });

  test('Should render a email input', () => {
    const input = inputTypeEmail.shadowRoot.querySelector('input');
    const typeInput = input.type;

    assert.equal(typeInput, 'email');
  });

  test('Should render a number input', () => {
    const input = inputTypeNumber.shadowRoot.querySelector('input');
    const typeInput = input.type;

    assert.equal(typeInput, 'number');
  });

  test('Should render a tel input', () => {
    const input = inputTypeTel.shadowRoot.querySelector('input');
    const typeInput = input.type;

    assert.equal(typeInput, 'tel');
  });
});

suite('valle-input validateby', () => {

  let inputValidateName;

  setup(() => {
    inputValidateName = fixture('inputValidateName');
  });

  test('Should render a validate name input', () => {
    const input = inputValidateName.shadowRoot.querySelector('input');
    const typeInput = input.type;

    assert.equal(typeInput, 'text');

    assert.isFalse(inputValidateName.hasAttribute('error'));

    MockInteractions.blur(input);
    assert.isTrue(inputValidateName.hasAttribute('error'));

    input.value = 'Larissa Abreu';

    MockInteractions.blur(input);
    assert.isFalse(inputValidateName.hasAttribute('error'));

    input.value = 'Larissa';

    MockInteractions.blur(input);
    assert.isTrue(inputValidateName.hasAttribute('error'));
  });
});

suite('valle-input value binding', () => {

  let valueBinding;

  setup(() => {
    valueBinding = fixture('valueBinding');
  });

  test('Should return a correct input value with javascript API', () => {
    const input = valueBinding.shadowRoot.querySelector('input');

    input.value = 'Value tests';

    MockInteractions.keyUpOn(input);
    assert.equal(valueBinding.value, input.value);
  });

  test('Should control value with javascript API', () => {
    const input = valueBinding.shadowRoot.querySelector('input');

    valueBinding.value = 'Value with JS';

    assert.equal(valueBinding.value, input.value);
  });
});
