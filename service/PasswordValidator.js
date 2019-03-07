class PasswordValidator {
    Validate(value) {
        value = value.trim();
        if (value.length > 0) {
            if (value.length < 8 || !this.HasUppercase(value) || !this.HasNumber(value)) {
                return false;
            }
        }
        return true;
    }
    HasNumber(value) {
        for (var i = 0; i < value.length; i++) {
            if (this.IsDigit(value.charAt(i))) {
                return true;
            }
        }
        return false;
    }

    HasUppercase(value) {
        var character;
        for (var i = 0; i < value.length; i++) {
            character = value.charAt(i);
            if (this.IsLetter(character)) {
                if (character == character.toUpperCase()) {
                    return true;
                }
            }
        }
    }
    IsLetter(c) {
        var cc = c.charCodeAt(0);
        if ((cc >= 0x41 && cc <= 0x5A) ||
            (cc >= 0x61 && cc <= 0x7A)) {
            return true;
        }
        return false;
    }
    IsDigit(c) {
        var cc = c.charCodeAt(0);
        if (cc >= 0x30 && cc <= 0x39) {
            return true;
        }
        return false;
    }

}
module.exports = PasswordValidator;