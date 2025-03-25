import { formatString } from '../services/formatString.js';

export const convertString = (req, res) => {
    const { originalString } = req.params;
    const formattedString = formatString(originalString);
    res.json({ message: formattedString });
};
