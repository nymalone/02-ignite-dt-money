import Modal from "react-modal";
import { Container } from "../TransactionsTable/styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" // estilização global no globa.ts
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Nome" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>/
      </Container>
    </Modal>
  );
}
