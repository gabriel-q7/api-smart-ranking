import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class JogadoresService {
    
    private jogadores: Jogador[] = []
    private readonly logger = new Logger(JogadoresService.name)

    consultarTodosJogadores() {
        throw new Error('Method not implemented.');
    }
    
    async upsertJogador(criarJogadorDto: CriarJogadorDto) {
        this.logger.log(`criarJogadorDto: ${JSON.stringify(criarJogadorDto)}`)
        this.insert(criarJogadorDto)
    }

    private insert(criarJogadorDto: CriarJogadorDto) {
        const { nome, telefoneCelular, email } = criarJogadorDto
        const jogador: Jogador = {
            _id: uuid(),
            nome,
            telefoneCelular,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFoto: 'www.google.com.br/foto123.jpg'
        }
        this.jogadores.push(jogador)
    }
}