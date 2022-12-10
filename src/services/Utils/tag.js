export const formatTag = (code = '') => {
  return code ? code?.match(/.{1,4}/g).join(' ') : '';
};

export const formatTagStatus = status => {
  if (!status) return;
  if (status === 'active') return 'Ativo';
  if (status === 'blocked') return 'Bloqueado';
  if (status === 'hard_blocked') return 'Bloqueado';
};
