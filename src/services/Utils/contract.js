import {COLORS} from '../../style/Theme';
import moment from 'moment';

export const formatContractStatus = status => {
  if (!status) return;
  if (status === 'active') return {label: 'Ativo', color: COLORS.success};
  if (status === 'inactive') return {label: 'Inativo', color: COLORS.error};
  if (status === 'canceled') return {label: 'Cancelado', color: COLORS.error};
  if (status === 'pending') return {label: 'Pendente', color: COLORS.warn};
  if (status === 'awaiting_inspection') return {label: 'Aguardando vistoria', color: COLORS.warn};
  if (status === 'awaiting_registration') return {label: 'Aguardando cadastro', color: COLORS.warn};
  if (status === 'awaiting_payment') return {label: 'Aguardando pagamento', color: COLORS.warn};
};

export const formatContractType = status => {
  if (!status) return;
  if (status === 'resubscription') return 'Mensalidade';
  if (status === 'subscription') return 'Adesão';
  if (status === 'tag') return 'Dispositivo';
};

export const formatContractChargeStatus = status => {
  if (!status) return {label: 'Aguardando pagamento', color: COLORS.warn};
  if (status === 'paid') return {label: 'Pago', color: COLORS.success};
  if (status === 'overdue') return {label: 'Atrasado', color: COLORS.error};
  if (status === 'awaiting_pix') return {label: 'Aguardando pagamento do PIX', color: COLORS.warn};
  if (status === 'awaiting_billet') return {label: 'Aguardando pagamento do boleto', color: COLORS.warn};
  if (status === 'awaiting_debitcard') return {label: 'Aguardando pagamento com cartão', color: COLORS.warn};
};

export const nextDueDate = dueDay => {
  const currentDay = Number(moment().format('DD'));
  if (dueDay >= currentDay) {
    return `${dueDay}/${moment().format('MM/YYYY')}`;
  } else {
    return `${dueDay}/${moment().add(1, 'M').format('MM/YYYY')}`;
  }
};
