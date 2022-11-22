import "../../styles/info/info.scss";

import { FiEdit } from "react-icons/fi";
import { IoMdClose } from 'react-icons/io';

export default function Info() {
    const openResponsibleEdit = () => {
        const responsibleEdit = document.querySelector('.responsibleEdit');
        responsibleEdit.style.display !== 'flex' ? responsibleEdit.style.display = 'flex' : responsibleEdit.style.display = 'none';
    }
    const closeResponsibleEdit = () => {
        const responsibleEdit = document.querySelector('.responsibleEdit');
        responsibleEdit.style.display !== 'none' ? responsibleEdit.style.display = 'none' :
        responsibleEdit.style.display = 'block';
    }
    const openPatientEdit = () => {
        const patientEdit = document.querySelector('.patientEdit');
        patientEdit.style.display !== 'flex' ? patientEdit.style.display = 'flex' : 
        patientEdit.style.display = 'none';
    }
    const closePatientEdit = () => {
        const patientEdit = document.querySelector('.patientEdit');
        patientEdit.style.display !== 'none' ? patientEdit.style.display = 'none' : 
        patientEdit.style.display = 'block';
    }
    return (
        <div id="info">
            <h2>Informações</h2>
            <div className="responsible">
                <div className="responsibleHeader">
                    <h3>Dados do Responsável:</h3>
                    <button onClick={openResponsibleEdit}>
                        <FiEdit className="editIcon"/>
                    </button>
                </div>
                <div className="name">
                    <h4>Nome:</h4>
                    <p>Responsável do Nome da Silva</p>
                </div>
                <div className="rg">
                    <h4>RG:</h4>
                    <p>0.000.00</p>
                </div>
                <div className="cpf">
                    <h4>CPF:</h4>
                    <p>000.000.000-00</p>
                </div>
                <div className="email">
                    <h4>E-mail:</h4>
                    <p>email@email.com</p>
                </div>
                <div className="address">
                    <h4>Endereço:</h4>
                    <p>Endereço da rua do bairo, 00</p>
                </div>
                <div className="phone1">
                    <h4>Telefone 1:</h4>
                    <p>(00) 00000-0000</p>
                </div>
                <div className="phone2">
                    <h4>Telefone 2:</h4>
                    <p>(00) 00000-0000</p>
                </div>
            </div>
            <form className="responsibleEdit">
               <div className="responsibleEditArea">
                    <div className="responsibleEditHeader">
                        <h3>Editar dados do Responsável:</h3>
                        <button onClick={closeResponsibleEdit}>
                            <IoMdClose className="closeIcon"/>
                        </button>
                    </div>
                    <div className="name">
                        <label htmlFor="name">
                            Nome completo:
                        </label>
                        <input type="text" name="name" placeholder='Digite o seu Nome...'/>
                    </div>
                    <div className="rg">
                        <label htmlFor="rg">
                            RG:
                        </label>
                        <input type="number" name="rg" placeholder='Digite seu RG...'/>
                    </div>
                    <div className="cpf">
                        <label htmlFor="cpf">
                            CPF:
                        </label>
                        <input type="number" name="cpf" placeholder='Digite seu CPF...'/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">
                            E-mail:
                        </label>
                        <input type="email" name="email" placeholder='Digite seu email...'/>
                    </div>
                    <div className="address">
                        <label htmlFor="address">
                            Endereço:
                        </label>
                        <input type="text" name="adress" placeholder='Digite seu endereço...'/>
                    </div>
                    <div className="phone1">
                        <label htmlFor="phone1">
                            Telefone 1:
                        </label>
                        <input type="number" name="phone1" placeholder='Digite um numero para contato...'/>
                    </div>
                    <div className="phone2">
                        <label htmlFor="phone2">
                            Telefone 2:
                        </label>
                        <input type="number" name="phone2" placeholder='Digite outro numero para contato...'/>
                    </div>
                    <button type="submit">
                        Salvar
                    </button>
               </div>
            </form>
            <div className="patient">
                <div className="patientHeader">
                    <h3>Dados do Paciente:</h3>
                    <button onClick={openPatientEdit}>
                        <FiEdit className="editIcon"/>
                    </button>
                </div>
                <div className="name">
                    <h4>Nome:</h4>
                    <p>Paciente do nome da Silva</p>
                </div>
                <div className="rg">
                    <h4>RG:</h4>
                    <p>0.000.000</p>
                </div>
                <div className="cpf">
                    <h4>CPF:</h4>
                    <p>000.000.000-00</p>
                </div>
                <div className="birth">
                    <h4>Data de Nascimento:</h4>
                    <p>00/00/0000</p>
                </div>
                <div className="comments">
                    <h4>Observações:</h4>
                    <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                </div>
            </div>
            <form className="patientEdit">
                <div className="patientEditArea">
                    <div className="patientEditHeader">
                        <h3>Editar dados do Paciente:</h3>
                        <button onClick={closePatientEdit}>
                            <IoMdClose className="closeIcon"/>
                        </button>
                    </div>
                    <div className="name">
                        <label htmlFor="name">
                            Nome completo:
                        </label>
                        <input type="text" name="name" placeholder='Digite o seu Nome...'/>
                    </div>
                    <div className="rg">
                        <label htmlFor="rg">
                            RG:
                        </label>
                        <input type="number" name="rg" placeholder='Digite seu RG...'/>
                    </div>
                    <div className="cpf">
                        <label htmlFor="cpf">
                            CPF:
                        </label>
                        <input type="number" name="cpf" placeholder='Digite seu CPF...'/>
                    </div>
                    <div className="birth">
                        <label htmlFor="birth">
                            Data de nascimento:
                        </label>
                        <input type="date" name="birth" />
                    </div>
                    <div className="comments">
                        <label htmlFor="comments">
                            Observações:
                        </label>
                        <textarea name="comments" cols="30" rows="10" placeholder='Digite aqui observações se necessário...'></textarea>
                    </div>
                    <button type="submit">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}