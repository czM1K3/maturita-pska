---
title: '02 - Operační systém'
---

# Operační systém
- Efektivní využití systémových zdrojů
	- Systémové zdroje:
		- CPU
		- RAM
			- Správa paměti
		- Paměťové úložiště
			- Filesystem
		- I/O
		- Multiuser
	- Využití
		- Přidělení, správa, odebrání procesů -> Instance úlohy (aplikace)
	- Efektivní
		- multitasking

## Rozdělení systémů
1. Windows X GNU/Linux
	- licence: Closed source X GPL v.2.0
	- modulárnost: není X velká (lze zvolit části systému)
2. Monolitické X mikrojádra
	- Monolitické
		- Jádro ovládá vše
		- HAL -> Hardware Abstraction Layer
	- Mikrojádro
		- Pouze základní funkce
		- Skládá se z: IPC, přerušení, standby, časování
		- Modulární: musím donahrát všechny moduly, které potřebuji
3. Desktop X Server
	- Server poskytuje služby
	- Desktop využívá služby
	- Server vyžaduje síťové připojení
	- GUI X TUI
	- Gnome (hezčí) X KDE (potřeba konfigurace)

## Konfigurace
- Ovládací panely
	- Síť
	- Systém
	- Zabezpečení
	- Programy
	- Hardware
	- Usnadnění přístupu
	- Uživatelé