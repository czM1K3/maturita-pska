---
title: '01 - Počítač'
---

# Počítač - základní části počítače

## Hardware
- CPU
	- Architekture: AMD, INTEL
	- Vlákna: jádro zvládne zpracovávat více úkolů v reálném čase najednou
- GPU
- RAM
- Deska
- Úložiště
- Zdroj
- Skříň
- I/O
- Sběrnice
	- "Spoje"
	- Typy
		- Datová
		- Adresová
		- Řídící
	- Rychlost určená:
		- Rychlost sběrnice
		- Taktem
	- Typy
		- USB
			- Data
			- Napájení
			- USB 3.0 - 5Gbps
			- Umožňuje stromovou strukturu
		- Sata
		- Firewire
- Chipset
	- North bridge - komunikace CPU a RAM
	- South bridge
		- USB, SATA, PCI, PCI Express, ...
		- Chytrý switch
	- Komunikace mezi zařízeními
	- Na základní desce

## Stavba počítače
- Vybírat komponenty postupně
	- CPU
	- Deska (Soket, kompatibilita)
	- RAM (typ (DDR5, DDR4, ...), rychlost, časování)
	- Grafická karta (ne vždy potřeba)
- Výpočet kapacity zdroje

## Instrukce
- Co potřebujeme
- S čím
- Kam s ním

## Architektura
### Von Neumanova
![Von Neumanova](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Von_Neumann_Architecture.svg/1200px-Von_Neumann_Architecture.svg.png)
### Harvardská
![Harvardská architektura](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Harvard_architecture.svg/362px-Harvard_architecture.svg.png)

## Post (Power on self test)
- Součást BIOSu
- Potřeba klávesnice
- Pípák (beep codes), stavový displej

## BIOS (Basic Input/Output System)
- Ovládání počítače
- Uložen v Flash paměti
- Bezpečnost
	- Heslo
	- Secure boot
- Boot po síti

## UEFI
- Vychází s BIOSu
- Grafické rozhraní