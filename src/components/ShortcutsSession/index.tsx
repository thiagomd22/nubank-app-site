/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ShortcutCard } from "../Cards";
import { Container } from "./style";

const options = [
    {
        index: 0,
        title: 'Área Pix',
        icon: <img src='/pix.svg' />
    },
    {
        index: 1,
        title: 'Pagar',
        icon: <img src='/barcode.svg' />
    },
    {
        index: 2,
        title: 'Transferir',
        icon: <img src='/transfer.svg' />
    },
    {
        index: 3,
        title: 'Depositar',
        icon: <img src='/deposit.svg' />
    },
    {
        index: 4,
        title: 'Pegar emprestado',
        icon: <img src='/money.svg' />
    },
    {
        index: 5,
        title: 'Recarga de celular',
        icon: <img src='/mobile.svg' />
    },
    {
        index: 6,
        title: 'Doação',
        icon: <img src='/money.svg' />
    },
];
    