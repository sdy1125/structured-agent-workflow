# E-COMMERCE WORKFLOW KIT
Bo cong cu lam viec voi AI Coding Agent theo quy trinh chuan:
FRS -> Plan -> Task nho -> prompt.xml -> Agent loop -> Evaluate.

## Cau truc

- 00-FRS.md ........................... Dac ta yeu cau (doc truoc khi bat dau)
- 01-PLAN-TASKS.md .................... Plan tong the + bang theo doi tien do
- 02-AGENTS.md ......................... Quy tac bat buoc danh cho Agent (dat o thu muc goc repo)
- prompts/task01..task05.xml .......... Prompt chuan cho tung task

1. Doc 00-FRS.md, sua lai cho dung y ban (stack, pham vi).
2. Tao repo "ecommerce-demo", copy 02-AGENTS.md vao thu muc goc repo.
3. Voi MOI task:
a. Mo chat/terminal Codex, paste noi dung file prompts/taskXX.xml
b. Bat buoc Codex: tom tat hieu biet + mini plan -> ban xac nhan -> moi duoc code
c. Codex code trong scope, tu test, bao cao theo <outputRequired>
d. Ban kiem chung theo <acceptanceCriteria>, tick vao 01-PLAN-TASKS.md
e. Dat/OK -> task tiep theo. Loi -> sua prompt hoac FRS roi chay lai
4. Tuyet doi: 1 task = 1 phien lam viec rieng. Khong gop task.

## Nguyen tac vang

- Task nao lam > 90 phut: DUNG, chia nho hon.
- Loi phat sinh: quay lai FRS/prompt sua goc, khong "va" tung dong code.
- Moi thay doi phai duoc giai thich ro rang trong bao cao cua Agent.