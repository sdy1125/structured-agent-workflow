# AGENTS.md 

## Quy trinh bat buoc voi moi task
1. Doc ky file prompt.xml cua task hien tai truoc khi viet bat ky dong code nao.
2. Tom tac lai: (a) ban hieu task nay la gi, (b) mini plan cac buoc,
   (c) nhung diem chua ro can hoi. Cho nguoi dung xac nhan roi moi code.
3. Chi lam nhung gi nam trong <inScope>. Tuyet doi khong cham <outOfScope>.
4. Tuan thu <hardRules>. Neu bat buoc phai vi pham, phai hoi truoc.
5. Sau khi code: TU chay test theo <testPlan>, bao cao pass/fail tung muc.
6. Bao cao ket thuc theo dung <outputRequired>: file da tao/sua,
   ket qua test, rui ro con lai.

## Quy tac code
- Giai thich moi thay doi quan trong (dau file, class, function chinh).
- Khong xoa/sua code ngoai pham vi task hien tai.
- Khong cai dependency moi neu prompt.xml khong yeu cau.
- Gap loi khong tuong minh trong prompt: DUNG lai va hoi, khong tu y quyet dinh.

## Neu khong dat acceptance criteria
Dung lai, bao cao dung muc nao fail, de xuat cach sua — khong lap lai
cach lam cu qua 2 lan.
