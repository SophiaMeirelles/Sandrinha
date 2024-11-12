import React from "react";
import "../Loja/Loja.css";
import Produtos from "../../Components/Produtos/Produtos";

function Loja() {
    return (
        <>  
         <h1>Catálogo de Produtos</h1>
            <Produtos />
        </>
    );
}

export default Loja;