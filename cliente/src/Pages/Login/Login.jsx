import React from "react";
import "../Login/Login.css";
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { CpuChipIcon } from "@heroicons/react/24/solid";

function Login1() {
  return (
    <div className="DivBody h-screen flex justify-center items-center">
      <Card shadow={false} className="card md:px-24 md:py-14 py-8">
        <CardHeader
          shadow={false}
          floated={false}
          className="card-header flex flex-col items-center mb-6"
        >
          <Typography variant="h3" className="text-center mb-2">
            Acesse sua Conta
          </Typography>
          <Typography variant="h5" className="text-gray-600 text-center">
            Bem-vindo de volta! Faça login para continuar.
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
              Não tem uma conta?
              <a href="/register" className="text-blue-500 ml-1 hover:underline">
                Cadastre-se
              </a>
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login1;
