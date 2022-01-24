---
title: '05-XX - Sítě'
---

# ISO/OSI
- Aplikační
- Prezentační
- Relační
- Transportní
- Síťová
- Datová
- Fyzická
	- Modulace
		- Analogová
		- Digitální

# TCP/IP
- Aplikační
- Transparentní
- Síťová
- Síťové rozhraní

# Standardy
- IEEE
- ITU

# Fyzická
- L3 switch X Router

## Typy kabelů
- Optika
	- 1
	- Více
- Metalika
	- Koax
		- Špatná práce s ním (krimpování, ...)
	- Kroucená dvoulinka
		- V páru kvůli stítění
		- STP
			- stítěný
			- Max 100m
		- UTP
			- nestítěný
		- Křížený
		- Přímý
			- Jiná zařízení na ISO/OSI modelu
		- MDIX - automatické rozpoznávání přímý/křížený
		- 802.3

## Pojmy
- Duplex
	- Full
		- Oba směry v jeden okamžik
	- Half
		- Jden směr v jeden okamžik

## Bezdrátové sítě
- 802.11
	- a, b, g, n, x
- Určená kanály a frekvence

# Strukturovaná kabeláž
- Konvergované sítě - pos tejných kabelech lze posílat více přenosů
- Komplexní návrh datových rozvodů (IPTV, VoIP, ...)

# Datová
- LLC
	- FSC
- MAC
	- Modulace signálu kabelu
- Frame
	- Head
		- Source MAC
		- Destination MAC
	- Data
	- Footer
		- FSC
		- Kontrolní součet
- Platnost DEST/SRC MAC adresy - každá síť má svou DEST/SRC MAC adresu
- Přepínané sítě
- Etherchannel
- Vlan
	- Tvoření podsítí
- Switch X Hub
	- Switch
		- Pamatuje si MAC adresy
	- Hub
		- Posílá vždy všem
- Kolizní doménu ruší switch
- ARP
	- Tabulka IPv4 adres s Mac adresami
- EUI64
- ICMPv6 - podobné ARP

# Síťová
- IPv4
	- 32bit
	- Hlavička
		- Srouce
		- Destination
		- TTL
		- Checksum
	- Data
- IPv6
	- 128bit
	- Prefix je maska
	- Link local adresa
		- Generuje operační systém
	- Hlavička
- Maska podsítě
- ICMP
	- Ping
	- Tracert
- Nat
- Router

# Transportní
- TCP
	- Spolehlivý
	- Checksum
	- Three way handshake
		- Klient žádá o spojení
		- Server potvrdí spojení
		- Klient potvrdí přijetí
- UDP
	- Není zaručena integrita
- Druhy portů
	- Well know ports 0-1023
	- Registrované porty 1024-49151
	- Dynamické porty 49152-65535

 # Relační
 - Udržuje relace
 - Synchronizace
 - Získání všech dat

 # Prezentační
 - Rozbalení dat (dekomprese, ...)
 
 # Aplikační vrstva
 - DHCP
 - DNS
 - HTTP
 - HTTPS
 - SSH
 - FTP