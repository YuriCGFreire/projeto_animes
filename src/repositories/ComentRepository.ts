import { EntityRepository, Repository } from "typeorm"
import {Coment} from "../models/Coment"

@EntityRepository(Coment)
export class ComentRepository extends Repository<Coment>{}