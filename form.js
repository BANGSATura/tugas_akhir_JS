function buat_login() {
  document.getElementById('tombolDaftar').remove();

  var tagh1 = document.createElement("H1");
  tagh1.className = "tulisan_login";
  tagh1.innerHTML = "Silahkan Mendaftar";
  document.getElementsByTagName('DIV')[0].appendChild(tagh1);

  var tagForm = document.createElement("FORM");
  document.getElementsByTagName('DIV')[0].appendChild(tagForm);

  var tagLabel = document.createElement("LABEL");
  tagLabel.innerHTML = "Nama User";
  document.getElementsByTagName('FORM')[0].appendChild(tagLabel);

  var inputUser = document.createElement("INPUT");
  inputUser.type = "text";
  inputUser.className = "form_login";
  inputUser.placeholder = "Nama User..";
  document.getElementsByTagName('FORM')[0].appendChild(inputUser);

  var tagLabel_2 = document.createElement("LABEL");
  tagLabel_2.innerHTML = "Nomor Handphone";
  document.getElementsByTagName('FORM')[0].appendChild(tagLabel_2);

  var inputPhone = document.createElement("INPUT");
  inputPhone.type = "tel";
  inputPhone.className = "form_login";
  inputPhone.placeholder = "Nomor Handphone";
  document.getElementsByTagName('FORM')[0].appendChild(inputPhone);

  var tagLabel_3 = document.createElement("LABEL");
  tagLabel_3.innerHTML = "Username";
  document.getElementsByTagName('FORM')[0].appendChild(tagLabel_3);

  var inputUserEmail = document.createElement("INPUT");
  inputUserEmail.type = "email";
  inputUserEmail.className = "form_login";
  inputUserEmail.placeholder = "Username atau Email";
  document.getElementsByTagName('FORM')[0].appendChild(inputUserEmail);

  var tagLabel_4 = document.createElement("LABEL");
  tagLabel_4.innerHTML = "Password";
  document.getElementsByTagName('FORM')[0].appendChild(tagLabel_4);

  var inputPassword = document.createElement("INPUT");
  inputPassword.type = "password";
  inputPassword.className = "form_login";
  inputPassword.placeholder = "Password";
  document.getElementsByTagName('FORM')[0].appendChild(inputPassword);

  var tombolButton = document.createElement("BUTTON");
  tombolButton.innerHTML = "DAFTAR SEKARANG";
  tombolButton.className = "tombol_login";
  document.getElementsByTagName('FORM')[0].appendChild(tombolButton);
}
