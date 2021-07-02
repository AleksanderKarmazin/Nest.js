import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
    return {
        uri: `mongodb://localhost:27017/NestApp` ,
        // uri: `${getMongoString(configService)}` ,
        ...getMongoOptions()
    };
};

const getMongoString = (configService: ConfigService) => {
    configService.get('MONGO_URI')
}

const getMongoOptions = () => ({
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})