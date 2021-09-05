import PhoneNumber from 'awesome-phonenumber';

export const cropString = (string: string, maxLength: number): string => {
  return string.slice(0, maxLength) + '...';
};

export const formatPhoneNumber = (phone: string): string => {
  const clearedPhone = phone.replace(/\D/g, '');
  const code = clearedPhone.slice(0, clearedPhone.length - 10);
  const country = PhoneNumber.getRegionCodeForCountryCode(+code);
  const number = new PhoneNumber(phone, country);

  return number.getNumber('international').split(' ').reduce((phoneNumber, part, idx, parts) => {
    if (idx === 0) return part;

    if (idx === 1) return `${phoneNumber} (${part}) `;

    if (idx + 1 === parts.length) return `${phoneNumber}${part}`;

    return `${phoneNumber}${part}-`;
  }, '');
};
