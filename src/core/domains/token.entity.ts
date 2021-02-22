interface IProps {
  id: string;
  authorized: boolean;
}

export class Token {
  constructor(private props: IProps) {}

  get id() {
    return this.props.id;
  }

  get authorized() {
    return this.props.authorized;
  }
}
