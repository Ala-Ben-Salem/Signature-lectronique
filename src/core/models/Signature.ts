export class Signature{

    id?: number;
    nom!: string;
    fonction!: string;
    department!: string;
    entreprise!: string;
    telephone!: number;
    mobile!: number;
    siteweb!: string;
    email!: string;
    addresse!: string;
    photo!: string;
    facebook!: string;
    twitter!: string;
    youtube!: string;
    linkedin!: string;
    instagram!: string;
    themecolor!: string;
    themecolortext!: string;
    themecolorlien!: string;
    police!: string;
    taillepolice!: number;
    FacebookisChecked!: boolean;
    TwitterisChecked!: boolean;
    YoutubeisChecked!: boolean;
    LinkedinisChecked!: boolean;
    InstagramisChecked!: boolean;
}



// En résumé, le ! est un moyen de dire à TypeScript que vous prenez la responsabilité d'initialiser cette propriété avant son utilisation, même si TypeScript n'est pas capable de le vérifier statiquement.