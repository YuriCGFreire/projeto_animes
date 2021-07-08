import { EntityRepository, Repository } from "typeorm";
import { Friend } from "../models/Friend";

@EntityRepository(Friend)
export class FriendRepository extends Repository<Friend>{}