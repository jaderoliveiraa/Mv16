const messages = {
	es: {
		translations: {
			signup: {
				title: "Registro",
				toasts: {
					success: "¡El usuario ha sido creado satisfactoriamente! ¡Ahora inicia sesión!",
					fail: "Error creando el usuario. Verifica la data reportada.",
				},
				form: {
					name: "Nombre",
					email: "Correo Electrónico",
					password: "Contraseña",
				},
				buttons: {
					submit: "Regístrate",
					login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
				},
			},
			login: {
				title: "Inicio de Sesión",
				form: {
					email: "Correo Electrónico",
					password: "Contraseña",
				},
				buttons: {
					submit: "Ingresa",
					register: "¿No tienes cuenta? ¡Regístrate!",
				},
			},
			companies: { // Start Need Translate
				title: "Cadastrar Empresa",
				form: {
					name: "Nome da Empresa",
					plan: "Plano",
					token: "Token",
					submit: "Cadastrar",
					success: "Empresa criada com sucesso!",
				}, // End Need Translate
			},
			auth: {
				toasts: {
					success: "¡Inicio de sesión exitoso!",
				},
				token: "Token",
			},
			dashboard: {
				charts: {
					perDay: {
						title: "Tickets hoy: ",
					},
				},
			},
			connections: {
				title: "Conexiones",
				toasts: {
					deleted: "¡La conexión de WhatsApp ha sido borrada satisfactoriamente!",
				},
				confirmationModal: {
					deleteTitle: "Borrar",
					deleteMessage: "¿Estás seguro? Este proceso no puede ser revertido.",
					disconnectTitle: "Desconectar",
					disconnectMessage: "Estás seguro? Deberá volver a leer el código QR",
				},
				buttons: {
					add: "Agrega WhatsApp",
					disconnect: "Desconectar",
					tryAgain: "Inténtalo de nuevo",
					qrcode: "QR CODE",
					newQr: "Nuevo QR CODE",
					connecting: "Conectando",
				},
				toolTips: {
					disconnected: {
						title: "No se pudo iniciar la sesión de WhatsApp",
						content: "Asegúrese de que su teléfono celular esté conectado a Internet y vuelva a intentarlo o solicite un nuevo código QR",
					},
					qrcode: {
						title: "Esperando la lectura del código QR",
						content: "Haga clic en el botón 'CÓDIGO QR' y lea el Código QR con su teléfono celular para iniciar la sesión",
					},
					connected: {
						title: "Conexión establecida",
					},
					timeout: {
						title: "Se perdió la conexión con el teléfono celular",
						content: "Asegúrese de que su teléfono celular esté conectado a Internet y que WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
					},
				},
				table: {
					name: "Nombre",
					status: "Estado",
					lastUpdate: "Última Actualización",
					default: "Por Defecto",
					actions: "Acciones",
					session: "Sesión",
				},
			},
			whatsappModal: {
				title: {
					add: "Agrega WhatsApp",
					edit: "Edita WhatsApp",
				},
				form: {
					name: "Nombre",
					default: "Por Defecto",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "WhatsApp guardado satisfactoriamente.",
			},
			qrCode: {
				message: "Lée el código QR para empezar la sesión.",
			},
			contacts: {
				title: "Contactos",
				toasts: {
					deleted: "¡Contacto borrado satisfactoriamente!",
				},
				searchPlaceholder: "Buscar...",
				confirmationModal: {
					deleteTitle: "Borrar",
					importTitlte: "Importar contactos",
					deleteMessage: "¿Estás seguro que deseas borrar este contacto? Todos los tickets relacionados se perderán.",
					importMessage: "¿Quieres importar todos los contactos desde tu teléfono?",
				},
				buttons: {
					import: "Importar Contactos",
					add: "Agregar Contacto",
				},
				table: {
					name: "Nombre",
					whatsapp: "WhatsApp",
					email: "Correo Electrónico",
					actions: "Acciones",
				},
			},
			contactModal: {
				title: {
					add: "Agregar contacto",
					edit: "Editar contacto",
				},
				form: {
					mainInfo: "Detalles del contacto",
					extraInfo: "Información adicional",
					name: "Nombre",
					number: "Número de Whatsapp",
					email: "Correo Electrónico",
					extraName: "Nombre del Campo",
					extraValue: "Valor",
				},
				buttons: {
					addExtraInfo: "Agregar información",
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Contacto guardado satisfactoriamente.",
			},
			queueModal: {
				title: {
					add: "Agregar cola",
					edit: "Editar cola",
				},
				form: {
					name: "Nombre",
					color: "Color",
					greetingMessage: "Mensaje de saludo",
					complationMessage: "Mensagem de conclusão", // Start Need translate
					outOfHoursMessage: "Mensagem de fora de expediente",
					ratingMessage: "Mensagem de avaliação", // End Need translate
					token: "Token",
				},
				buttons: {
					okAdd: "Añadir",
					okEdit: "Ahorrar",
					cancel: "Cancelar",
				},
			},
			userModal: {
				title: {
					add: "Agregar usuario",
					edit: "Editar usuario",
				},
				form: {
					name: "Nombre",
					email: "Correo Electrónico",
					password: "Contraseña",
					profile: "Perfil",
				},
				buttons: {
					okAdd: "Agregar",
					okEdit: "Guardar",
					cancel: "Cancelar",
				},
				success: "Usuario guardado satisfactoriamente.",
			},
			scheduleModal: { // Start Need Translate
				title: {
					add: "Novo Agendamento",
					edit: "Editar Agendamento",
				},
				form: {
					body: "Mensagem",
					contact: "Contato",
					sendAt: "Data de Agendamento",
					sentAt: "Data de Envio",
				},
				buttons: {
					okAdd: "Adicionar",
					okEdit: "Salvar",
					cancel: "Cancelar",
				},
				success: "Agendamento salvo com sucesso.",
			},
			tagModal: {
				title: {
					add: "Nova Tag",
					edit: "Editar Tag",
				},
				form: {
					name: "Nome",
					color: "Cor",
				},
				buttons: {
					okAdd: "Adicionar",
					okEdit: "Salvar",
					cancel: "Cancelar",
				},
				success: "Tag salvo com sucesso.",
			}, // End Need Translate
			chat: {
				noTicketMessage: "Selecciona un ticket para empezar a chatear.",
			},
			ticketsManager: {
				buttons: {
					newTicket: "Nuevo",
				},
			},
			ticketsQueueSelect: {
				placeholder: "Linhas",
			},
			tickets: {
				toasts: {
					deleted: "El ticket en el que estabas ha sido borrado.",
				},
				notification: {
					message: "Mensaje de",
				},
				tabs: {
					open: {
						title: "Bandeja"
					},
					closed: {
						title: "Resueltos"
					},
					search: {
						title: "Buscar"
					},
				},
				search: {
					placeholder: "Buscar tickets y mensajes.",
				},
				buttons: {
					showAll: "Todos",
				},
			},
			transferTicketModal: {
				title: "Transferir Ticket",
				fieldLabel: "Escriba para buscar usuarios",
				fieldQueueLabel: "Transferir para fila", // Start Need Translate
				fieldQueuePlaceholder: "Selecione uma fila", // End need translate
				noOptions: "No se encontraron usuarios con ese nombre",
				buttons: {
					ok: "Transferir",
					cancel: "Cancelar",
				},
			},
			ticketsList: {
				pendingHeader: "Cola",
				assignedHeader: "Trabajando en",
				noTicketsTitle: "¡Nada acá!",
				noTicketsMessage: "No se encontraron tickets con este estado o término de búsqueda",
				buttons: {
					accept: "Acceptar",
				},
			},
			newTicketModal: {
				title: "Crear Ticket",
				fieldLabel: "Escribe para buscar un contacto",
				add: "Añadir",
				buttons: {
					ok: "Guardar",
					cancel: "Cancelar",
				},
			},
			mainDrawer: {
				listItems: {
					dashboard: "Dashboard", //Start Need Translate
					connections: "Conexões",
					tickets: "Atendimentos",
					quickMessages: "Respostas Rápidas",
					contacts: "Contatos",
					queues: "Filas & Chatbot",
					tags: "Tags",
					administration: "Administração",
					users: "Usuários",
					settings: "Configurações",
					helps: "Ajuda",
					messagesAPI: "API",
					schedules: "Agendamentos",
					campaigns: "Campanhas",
					annoucements: "Informativos",
					chats: "Chat Interno", //End Need Translate
				},
				appBar: {
					user: {
						profile: "Perfil",
						logout: "Cerrar Sesión",
					},
				},
			},
			messagesAPI: { //Start Need Translate
				title: "API",
				textMessage: {
					number: "Número",
					body: "Mensagem",
					token: "Token cadastrado",
				},
				mediaMessage: {
					number: "Número",
					body: "Nome do arquivo",
					media: "Arquivo",
					token: "Token cadastrado",
				}, //End Need Translate
			},
			notifications: {
				noTickets: "Sin notificaciones.",
			},
			quickMessages: { //Start Need Translate
				title: "Respostas Rápidas",
				buttons: {
					add: "Nova Resposta",
				},
				dialog: {
					shortcode: "Atalho",
					message: "Resposta",
				},
			},
			contactLists: {
				title: "Listas de Contatos",
				table: {
					name: "Nome",
					contacts: "Contatos",
					actions: "Ações",
				},
				buttons: {
					add: "Nova Lista",
				},
				dialog: {
					name: "Nome",
					company: "Empresa",
					okEdit: "Editar",
					okAdd: "Adicionar",
					add: "Adicionar",
					edit: "Editar",
					cancel: "Cancelar",
				},
				confirmationModal: {
					deleteTitle: "Excluir",
					deleteMessage: "Esta ação não pode ser revertida.",
				},
				toasts: {
					deleted: "Registro excluído",
				},
			},
			contactListItems: {
				title: "Contatos",
				searchPlaceholder: "Pesquisa",
				buttons: {
					add: "Novo",
					lists: "Listas",
					import: "Importar",
				},
				dialog: {
					name: "Nome",
					number: "Número",
					whatsapp: "Whatsapp",
					email: "E-mail",
					okEdit: "Editar",
					okAdd: "Adicionar",
					add: "Adicionar",
					edit: "Editar",
					cancel: "Cancelar",
				},
				table: {
					name: "Nome",
					number: "Número",
					whatsapp: "Whatsapp",
					email: "E-mail",
					actions: "Ações",
				},
				confirmationModal: {
					deleteTitle: "Excluir",
					deleteMessage: "Esta ação não pode ser revertida.",
					importMessage: "Deseja importar os contatos desta planilha? ",
					importTitlte: "Importar",
				},
				toasts: {
					deleted: "Registro excluído",
				},
			},
			campaigns: {
				title: "Campanhas",
				searchPlaceholder: "Pesquisa",
				buttons: {
					add: "Nova Campanha",
					contactLists: "Listas de Contatos",
				},
				table: {
					name: "Nome",
					whatsapp: "Conexão",
					contactList: "Lista de Contatos",
					status: "Status",
					scheduledAt: "Agendamento",
					completedAt: "Concluída",
					confirmation: "Confirmação",
					actions: "Ações",
				},
				dialog: {
					new: "Nova Campanha",
					update: "Editar Campanha",
					readonly: "Apenas Visualização",
					form: {
						name: "Nome",
						message1: "Mensagem 1",
						message2: "Mensagem 2",
						message3: "Mensagem 3",
						message4: "Mensagem 4",
						message5: "Mensagem 5",
						confirmationMessage1: "Mensagem de Confirmação 1",
						confirmationMessage2: "Mensagem de Confirmação 2",
						confirmationMessage3: "Mensagem de Confirmação 3",
						confirmationMessage4: "Mensagem de Confirmação 4",
						confirmationMessage5: "Mensagem de Confirmação 5",
						messagePlaceholder: "Conteúdo da mensagem",
						whatsapp: "Conexão",
						status: "Status",
						scheduledAt: "Agendamento",
						confirmation: "Confirmação",
						contactList: "Lista de Contato",
					},
					buttons: {
						add: "Adicionar",
						edit: "Atualizar",
						okadd: "Ok",
						cancel: "Cancelar Disparos",
						restart: "Reiniciar Disparos",
						close: "Fechar",
						attach: "Anexar Arquivo",
					},
				},
				confirmationModal: {
					deleteTitle: "Excluir",
					deleteMessage: "Esta ação não pode ser revertida.",
				},
				toasts: {
					success: "Operação realizada com sucesso",
					cancel: "Campanha cancelada",
					restart: "Campanha reiniciada",
					deleted: "Registro excluído",
				},
			},
			announcements: {
				title: "Informativos",
				searchPlaceholder: "Pesquisa",
				buttons: {
					add: "Novo Informativo",
					contactLists: "Listas de Informativos",
				},
				table: {
					priority: "Prioridade",
					title: "Title",
					text: "Texto",
					mediaName: "Arquivo",
					status: "Status",
					actions: "Ações",
				},
				dialog: {
					edit: "Edição de Informativo",
					add: "Novo Informativo",
					update: "Editar Informativo",
					readonly: "Apenas Visualização",
					form: {
						priority: "Prioridade",
						title: "Title",
						text: "Texto",
						mediaPath: "Arquivo",
						status: "Status",
					},
					buttons: {
						add: "Adicionar",
						edit: "Atualizar",
						okadd: "Ok",
						cancel: "Cancelar",
						close: "Fechar",
						attach: "Anexar Arquivo",
					},
				},
				confirmationModal: {
					deleteTitle: "Excluir",
					deleteMessage: "Esta ação não pode ser revertida.",
				},
				toasts: {
					success: "Operação realizada com sucesso",
					deleted: "Registro excluído",
				},
			},
			campaignsConfig: {
				title: "Configurações de Campanhas",
			}, //End Need Translate
			queues: {
				title: "Linhas",
				table: {
					name: "Nombre",
					color: "Color",
					greeting: "Mensaje de saludo",
					actions: "Comportamiento",
				},
				buttons: {
					add: "Agregar cola",
				},
				confirmationModal: {
					deleteTitle: "Eliminar",
					deleteMessage: "¿Estás seguro? ¡Esta acción no se puede revertir! Los tickets en esa cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
				},
			},
			queueSelect: {
				inputLabel: "Linhas",
			},
			users: {
				title: "Usuarios",
				table: {
					name: "Nombre",
					email: "Correo Electrónico",
					profile: "Perfil",
					actions: "Acciones",
				},
				buttons: {
					add: "Agregar usuario",
				},
				toasts: {
					deleted: "Usuario borrado satisfactoriamente.",
				},
				confirmationModal: {
					deleteTitle: "Borrar",
					deleteMessage: "Toda la información del usuario se perderá. Los tickets abiertos de los usuarios se moverán a la cola.",
				},
			},
			helps: { // Start Need Translate
				title: "Central de Ajuda",
			},
			schedules: {
				title: "Agendamentos",
				confirmationModal: {
					deleteTitle: "Você tem certeza que quer excluir este Agendamento?",
					deleteMessage: "Esta ação não pode ser revertida.",
				},
				table: {
					contact: "Contato",
					body: "Mensagem",
					sendAt: "Data de Agendamento",
					sentAt: "Data de Envio",
					status: "Status",
					actions: "Ações",
				},
				buttons: {
					add: "Novo Agendamento",
				},
				toasts: {
					deleted: "Agendamento excluído com sucesso.",
				},
			},
			tags: {
				title: "Tags",
				confirmationModal: {
					deleteTitle: "Você tem certeza que quer excluir esta Tag?",
					deleteMessage: "Esta ação não pode ser revertida.",
				},
				table: {
					name: "Nome",
					color: "Cor",
					tickets: "Registros Tagdos",
					actions: "Ações",
				},
				buttons: {
					add: "Nova Tag",
				},
				toasts: {
					deleted: "Tag excluído com sucesso.",
				},
			}, // End Need Translate
			settings: {
				success: "Configuración guardada satisfactoriamente.",
				title: "Configuración",
				settings: {
					userCreation: {
						name: "Creación de usuarios",
						options: {
							enabled: "Habilitado",
							disabled: "Deshabilitado",
						},
					},
				},
			},
			messagesList: {
				header: {
					assignedTo: "Asignado a:",
					buttons: {
						return: "Devolver",
						resolve: "Resolver",
						reopen: "Reabrir",
						accept: "Aceptar",
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Escribe un mensaje",
				placeholderClosed: "Vuelva a abrir o acepte este ticket para enviar un mensaje.",
				signMessage: "Firmar",
			},
			contactDrawer: {
				header: "Detalles del contacto",
				buttons: {
					edit: "Editar contacto",
				},
				extraInfo: "Otra información",
			},
			ticketOptionsMenu: { // Start Need Translate
				schedule: "Agendamento",
				delete: "Deletar",
				transfer: "Transferir",
				registerAppointment: "Observações do Contato",
				appointmentsModal: {
					title: "Observações do Contato",
					textarea: "Observação",
					placeholder: "Insira aqui a informação que deseja registrar",
				},
				confirmationModal: {
					title: "Deletar o ticket do contato",
					message: "Atenção! Todas as mensagens relacionadas ao ticket serão perdidas.",
				},
				buttons: {
					delete: "Excluir",
					cancel: "Cancelar",
				},
			},  // End Need Translate
			confirmationModal: {
				buttons: {
					confirm: "Ok",
					cancel: "Cancelar",
				},
			},
			messageOptionsMenu: {
				delete: "Borrar",
				reply: "Responder",
				confirmationModal: {
					title: "¿Borrar mensaje?",
					message: "Esta acción no puede ser revertida.",
				},
			},
			backendErrors: {
				ERR_NO_OTHER_WHATSAPP: "Debe haber al menos una conexión de WhatsApp predeterminada.",
				ERR_NO_DEF_WAPP_FOUND: "No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
				ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no ​​está inicializada. Verifique la página de conexiones.",
				ERR_WAPP_CHECK_CONTACT: "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones.",
				ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
				ERR_WAPP_DOWNLOAD_MEDIA: "No se pudieron descargar los medios de WhatsApp. Verifique la página de conexiones.",
				ERR_INVALID_CREDENTIALS: "Error de autenticación. Vuelva a intentarlo.",
				ERR_SENDING_WAPP_MSG: "Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
				ERR_DELETE_WAPP_MSG: "No se pudo borrar el mensaje de WhatsApp.",
				ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
				ERR_SESSION_EXPIRED: "Sesión caducada. Inicie sesión.",
				ERR_USER_CREATION_DISABLED: "La creación de usuarios fue deshabilitada por el administrador.",
				ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
				ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
				ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
				ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
				ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
				ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
				ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
				ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
				ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
				ERR_FETCH_WAPP_MSG: "Error al obtener el mensaje en WhtasApp, tal vez sea demasiado antiguo.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS: "Este color ya está en uso, elija otro.",
				ERR_WAPP_GREETING_REQUIRED: "El mensaje de saludo es obligatorio cuando hay más de una cola.",
			},
		},
	},
};

export {
	messages
};