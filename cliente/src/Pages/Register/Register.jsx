import React from "react";
import "../Register/Register.css";
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

function Register() {
  return (
    <div className="DivBody h-screen flex justify-center items-center">
      <Card shadow={false} className="card md:px-24 md:py-14 py-8">
        <CardHeader
          shadow={false}
          floated={false}
          className="card-header flex flex-col items-center mb-6"
        >
          <Typography variant="h3" className="text-center mb-2">
            Bem-vindo!
          </Typography>
          <Typography variant="h5" className="text-gray-600 text-center">
            Faça seu cadastro para continuar.
          </Typography>
        </CardHeader>
        <CardBody>
          <form action="#" className="flex flex-col gap-4">
            <div className="form-group">
              <label htmlFor="usuario" className="label">
                Nome de Usuário
              </label>
              <Input
                id="usuario"
                className="input"
                size="lg"
                type="text"
                name="text"
                placeholder="usuário"
              />
              <label htmlFor="Rdb" className="label">
                Usuário ou Administrador?
              </label>
              <div className="DivRdb">
                <label htmlFor="RdbUser" className="label">
                  Usuário
                </label>
                <Input
                  id="RdbUser"
                  className="input"
                  size="lg"
                  type="radio"
                  name="Rdb"
                />
              </div>
              <div  className="DivRdb">
                <label htmlFor="RdbAdm" className="label">
                  Administrador
                </label>
                <Input
                  id="RdbAdm"
                  className="input"
                  size="lg"
                  type="radio"
                  name="Rdb"
                />
              </div>
              <label htmlFor="senha" className="label">
                Senha
              </label>
              <Input
                id="senha"
                className="input"
                size="lg"
                type="password"
                name="senha"
                placeholder="senha"
              />
            </div>
            <Button size="lg" color="blue" className="button" fullWidth>
              Entrar
            </Button>
          </form>
          <div className="text-center mt-4">
            <Typography variant="h5" className="text-sm text-gray-600 mt-2">
              Já tem uma conta?
              <a href="/login" className="text-blue-500 ml-1 hover:underline">
                Faça Log-in
              </a>
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Register;
