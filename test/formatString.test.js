import { expect } from 'chai';
import { formatString } from '../services/formatString.js';

describe('formatString Tests', () => {
    it('should handle lowercase consonant (pig -> igpay)', () => {
        expect(formatString('pig')).to.equal('igpay');
    });

    it('should handle lowercase vowel (egg -> eggay)', () => {
        expect(formatString('egg')).to.equal('eggay');
    });

    it('should handle lowercase word starting with vowel (apple -> appleay)', () => {
        expect(formatString('apple')).to.equal('appleay');
    });

    it('should handle uppercase word starting with vowel (Egg -> Eggay)', () => {
        expect(formatString('Egg')).to.equal('Eggay');
    });

    it('should handle mixed case word (Pig -> igpay)', () => {
        expect(formatString('Pig')).to.equal('igpay');
    });
});