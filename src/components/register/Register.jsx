import "../../styles/register/register.scss";

export default function Register() {
    return (
        <div id="register">
            <h2>Cadastro</h2>
            <form action="" method="post" className="form">
                <div className="responsible">
                    <div className="responsibleTitle">
                        <h3>Dados do Responsável:</h3>
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
                        <input type="number" name="rg" placeholder='Digite o seu RG...'/>
                    </div>
                    <div className="cpf">
                        <label htmlFor="cpf">
                            CPF:
                        </label>
                        <input type="number" name="cpf" placeholder='Digite o seu CPF...'/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">
                            E-mail:
                        </label>
                        <input type="email" name="email" placeholder='Digite o seu email...'/>
                    </div>
                    <div className="address">
                        <label htmlFor="address">
                            Endereço:
                        </label>
                        <input type="text" name="adress" placeholder='Digite o seu endereço...'/>
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
                    <div className="password">
                        <label htmlFor="password">
                            Senha:
                        </label>
                        <input type="password" name="password" placeholder='Digite aqui a sua senha...'/>
                    </div>
                    <div className="passwordConfirm">
                        <label htmlFor="passwordConfirm">
                            Confirmar senha:
                        </label>
                        <input type="password" name="passwordConfirm" placeholder='Confirme a sua senha...'/>
                    </div>
                </div>
                <div className="patient">
                    <div className="patientTitle">
                        <h3>Dados do Paciente:</h3>
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
                </div>
                <button type="submit">Finalizar Cadastro</button>
            </form>
        </div>
    )
}