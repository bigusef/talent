from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.pagination import PageNumberPagination


from .models import Expert
from .serializers import ExpertSerializer


class ExpertPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'size'
    max_page_size = 15


class ExpertListView(ListCreateAPIView):
    serializer_class = ExpertSerializer
    pagination_class = ExpertPagination

    def get_queryset(self):
        if self.request.method == 'GET' and 'order_by' in self.request.GET:
            order = self.request.GET.get('order_by')
            queryset = Expert.objects.all().order_by(f'-{order}')
        else:
            queryset = Expert.objects.all()
        return queryset


class ExpertDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Expert.objects.all()
    serializer_class = ExpertSerializer
