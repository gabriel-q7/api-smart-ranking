import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {
    constructor(private readonly jogadorService: JogadoresService ) {}

    @Get()
    async consultarJogadores() {
        return this.jogadorService.consultarTodosJogadores();
    }

    
    @Post()
    async criarAtualizarJogador(
        @Body() criarJogadorDto: CriarJogadorDto
    ) {
        return this.jogadorService.upsertJogador(criarJogadorDto);
    }

}
