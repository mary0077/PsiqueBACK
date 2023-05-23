
create table Usuario(
id varchar(50) not null primary key,
nome varchar(100) not null,
CPF int(11),
email varchar(70)not null unique,
senha varchar(10)not null

);

create table profissional (
  id varchar(50) not null primary key,
  nome varchar(100) not null,
  email varchar(70) not null,
  senha varchar(10),
  CPF int(11),
  CRP int(10) not null,
  telefone int(10) not null,
  data_nascimento date,
  foreign key (id) references Usuario(id),
  foreign key (email) references Usuario(email),
  foreign key (senha) references Usuario(senha),
  foreign key (CPF) references Usuario(CPF)
);

create table agendamentos(
id varchar (50) not null primary key,
paciente_id varchar(50) not null,
psicologo_id varchar(50) not null,
data_atendimento DATE NOT NULL,
foreign key(paciente_id) references Usuario(id),
foreign key(psicologo_id) references profissional(id)
);