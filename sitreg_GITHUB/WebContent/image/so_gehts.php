<!-- TUTORIAL-ARTIKEL: http://www-coding.de/so-gehts-eigenes-captcha-mit-php/ -->

<!--
		1. Teil
		
		Binde diesen Code dort ein, wo das Captcha angezeigt werden soll, also innerhalb eines Formulars.
		Wenn die captcha.php nicht im selben Verzeichnis liegt musst Du diesen Pfad (src="") entsprechend anpassen.
-->
<img src="captcha.php" alt="Captcha" title="Captcha - Bitte Zeichen in das Feld eingeben" width=140 height=40 />

<!--
		2. Teil
		
		Au�erdem ben�tigst Du noch ein Textfeld mit dem Namen "captcha_code", welches auch in dem Formular eingebaut werden muss.
		Das Textfeld kann zum Beispiel so aussehen:
-->
<input type="text" name="captcha_code" size=10 />


<!--
		3. Teil
		
		Sobald das Formular abgesendet wurde, musst du den Code auf einer PHP-Seite pr�fen.
		Dieser Ausschnitt zeigt Dir, welche Code-Teile in deiner PHP-Seite enthalten sein m�ssen.
-->
<?php
	// Ganz oben, vor irgendeiner Ausgabe: //
	session_start();
	
	// Bearbeiten des Formulars //
	if ($_POST['captcha_code'] == $_SESSION['captcha_spam']) {
		// Das Captcha wurde korrekt ausgef�llt //
		
		// [HIER] kann jetzt der PHP-Code hin, den vorher ohnehin genutzt hast, um das Formular zu verarbeiten.

	} else {
		// Captcha wurde falsch ausgef�llt, Fehler ausgeben. //
		echo 'Du hast den Captcha-Code falsch eingegeben!';
	}
?>

<!--
		4. Hinweis
		
		Wir hoffen, dass Dir dieses Captcha geholfen hat.
		Solltest du Fragen oder Verbesserungsvorschl�ge haben, so kannst Du Dich �ber die folgende Seite mit uns in Verbindung setzen:
		http://www-coding.de/so-gehts-eigenes-captcha-mit-php/
-->
